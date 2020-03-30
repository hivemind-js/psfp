module Yoga.Theme.CSSBaseline where

import Prelude hiding (add)
import CSS (declare)
import Color (toHexString)
import Data.Array.NonEmpty as NEA
import Effect (Effect)
import JSS (JSSClasses, JSSElem, jss, jssClasses)
import React.Basic (ReactComponent)
import React.Basic.Hooks (JSX, component, fragment)
import React.Basic.Hooks as React
import Yoga.Font.Rubik as Rubik
import Yoga.Font.VictorMono as VictorMono
import Yoga.Theme.Styles (makeStylesJSS)
import Yoga.Theme.Types (YogaTheme, CSSTheme)

mkCssBaseline ∷
  Effect (ReactComponent { kids ∷ Array JSX })
mkCssBaseline = do
  useStyles <- makeStylesJSS styles
  component "CSSBaseline" \{ kids } -> React.do
    classes <- useStyles {}
    pure
      $ fragment kids

html ∷ JSSElem {}
html =
  jss
    { "WebkitFontSmoothing": "antialiased" -- Antialiasing. 
    , "MozOsxFontSmoothing": "grayscale" -- Antialiasing. 
    , boxSizing: "border-box"
    }

root ∷ CSSTheme -> JSSElem {}
root theme =
  jss do
    declare theme.ratioVar
    declare theme.s_5Var
    declare theme.s_4Var
    declare theme.s_3Var
    declare theme.s_2Var
    declare theme.s_1Var
    declare theme.s0Var
    declare theme.s1Var
    declare theme.s2Var
    declare theme.s3Var
    declare theme.s4Var
    declare theme.s5Var

styles ∷ JSSClasses YogaTheme {} ( "@global" ∷ JSSElem {} )
styles =
  jssClasses \theme ->
    { "@global":
      jss
        { html
        , "@font-face": jss (Rubik.fontFamilies <> VictorMono.fontFamilies)
        , ":root": root theme
        , "*":
          { maxWidth: theme.measure
          }
        , "*, *::before, *::after":
          { boxSizing: "inherit"
          , fontFamily: "inherit"
          , color: "inherit"
          , overflowWrap: "break-word"
          , margin: 0
          , padding: 0
          }
        , "strong, b": { fontWeight: theme.fontWeightBold }
        , "html, body, button, div, header, nav, main, footer":
          { maxWidth: "none"
          }
        , body:
          { margin: 0
          , backgroundColor: theme.backgroundColour # toHexString
          , color: theme.textColour # toHexString
          , fontFamily: NEA.head theme.textFontFamily
          , "&::backdrop":
            { backgroundColor: theme.backgroundColour # toHexString
            }
          }
        , "h1, h2, h3, h4":
          { "line-height": "calc(0.8 * var(--ratio))" -- [TODO]: Move to variable
          , "font-weight": 700
          , "hyphens": "auto"
          }
        , "h1, .h1":
          { "font-size": "var(--s4)"
          }
        , "h2, .h2":
          { "font-size": "var(--s3)"
          }
        , "h3, .h3":
          { "font-size": "var(--s2)"
          , "hyphens": "auto"
          , "text-transform": "uppercase"
          }
        , "h4, .h4":
          { "font-size": "var(--s1)"
          , "text-transform": "uppercase"
          }
        , "code, pre":
          { fontFamily: NEA.head theme.codeFontFamily
          , lineHeight: "var(--ratio)"
          , fontSize: "var(--s0)"
          , fontSmooth: "never"
          }
        }
    }
