module Yoga.InlineCode.Spec where

import Prelude
import Data.Maybe (Maybe(..))
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import Effect.Aff (Aff)
import Effect.Class (liftEffect)
import Effect.Ref (Ref)
import Effect.Ref as Ref
import Justifill (justifill)
import React.Basic.Extra.Hooks.UseAffReducer (useAffReducer)
import React.Basic.Hooks (ReactComponent, component, element, useEffect)
import React.Basic.Hooks as React
import React.TestingLibrary (describeComponent, fireEventSubmit, renderComponent, typeText)
import Test.Spec (Spec, it)
import Test.Spec.Assertions (shouldEqual)
import Web.Event.Internal.Types (Event)
import Web.HTML.HTMLElement (focus)
import Yoga.InlineCode.Component as InlineCode
import Yoga.Spec.Helpers (withDarkTheme)

foreign import newInputEvent ∷ String -> Event

foreign import newChangeEvent ∷ Event

spec ∷ Spec Unit
spec =
  describeComponent (withDarkTheme mkWrapper)
    "The InlineCode Component" do
    it "renders without problems" \wrapper -> do
      strRef <- Ref.new "" # liftEffect
      void $ renderComponent wrapper { strRef }
    it "performs actions" \wrapper -> do
      strRef <- Ref.new "" # liftEffect
      { findByTestId } <- renderComponent wrapper { strRef }
      input <- findByTestId "inline-code"
      focus input # liftEffect
      typeText "Heinzelmän" input
      fireEventSubmit input
      refContent <- Ref.read strRef # liftEffect
      refContent `shouldEqual` "Heinzelmän"

data Action
  = InlineCodeAction String

derive instance eqAction ∷ Eq Action
mkReducer ∷ Ref String -> Maybe String -> Action -> Aff (Maybe String)
mkReducer ref state = case _ of
  InlineCodeAction s -> do
    Ref.write s ref # liftEffect
    pure state

mkWrapper ∷ Effect (ReactComponent { strRef ∷ Ref String })
mkWrapper = do
  inlineCode <- InlineCode.makeComponent
  component "Wrapper" \{ strRef } -> React.do
    state /\ dispatch <- useAffReducer Nothing (mkReducer strRef)
    useEffect state mempty
    pure
      $ element inlineCode
          ( justifill
              { onSubmit: dispatch <<< InlineCodeAction
              }
          )
