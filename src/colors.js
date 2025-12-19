import Color from "color";

export const retroColors = {
  pink: Color("#FF5DA2"),       // hot retro pink
  red: Color("#E63946"),        // warm vintage red
  yellow: Color("#FFD166"),     // mustard yellow
  turquoise: Color("#06D6A0"),  // retro teal
  dark: Color("#2B2D42"),       // contrast background
  light: Color("#F8F9FA")       // soft background
};

export const retroTheme = {
"dark": retroColors.dark,
  "pink": retroColors.pink,
  "pink-light": retroColors.pink.lighten(0.2),
  "pink-dark": retroColors.pink.darken(0.2),
  "turquoise": retroColors.turquoise,
  "turquoise-light": retroColors.turquoise.lighten(0.2),
  "turquoise-dark": retroColors.turquoise.darken(0.25),
  "yellow": retroColors.yellow,
  "yellow-light": retroColors.yellow.lighten(0.18),
  "yellow-dark": retroColors.yellow.darken(0.18),
  "red": retroColors.red,
  "red-light": retroColors.red.lighten(0.18),
  "red-dark": retroColors.red.darken(0.22),
  
  "text": retroColors.dark.darken(0.3),
  "background": retroColors.light,
  "surface": retroColors.light.darken(0.05),
  "border": retroColors.dark.alpha(0.15)
};