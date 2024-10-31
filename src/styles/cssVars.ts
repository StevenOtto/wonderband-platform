// Constants

const gutter = 32;

export const breakpointsArray = [0, 576, 767, 980, 1314, 1440];

const breakpoints = {
  xs: breakpointsArray[0],
  sm: breakpointsArray[1],
  md: breakpointsArray[2],
  lg: breakpointsArray[3],
  xl: breakpointsArray[4],
  xxl: breakpointsArray[5],
};

enum Distances {
  xxs = 10,
  xs = 16,
  sm = 20,
  md = 24,
  lg = 36,
  xl = 64,
  xxl = 92,
  xxxl = 128,
  xxxxl = 164,
}

export enum Colors {
  white = "#ffffff",
  black = "#000",
  beige = "#FAF4E7",
  beigeDark = "#E1DAC7",
  green = "#00EF2C",
  blue = "#9BC2C4",
  darkGreen = "#064749",
  purple = "#FB49BA",
}

enum Fonts {
  default = "'IBM Plex Mono', monospace",
}

export enum Vars {
  fg = "--themed-fg",
  bg = "--themed-bg",
  buttonFg = "--themed-button-fg",
  light = "--themed-light",
  dark = "--themed-dark",
  darker = "--themed-darker",
}

enum FontSizes {
  xs = 12,
  sm = 14,
  base = 15,
  md = 16,
  lg = 18,
  xl = 20,
  "2xl" = 24,
  "3xl" = 32,
  "4xl" = 40,
  "5xl" = 48,
  "6xl" = 60,
  "7xl" = 72,
  "8xl" = 96,
  "9xl" = 128,
}

enum Transitions {
  half = "150ms ease-in-out",
  default = "300ms ease-in-out",
}

enum ZIndexes {
  default = 1,
  header = 10,
  overlay = 11,
  modal = 20,
  debug = 100,
}

enum borderRadius {
  small = 6,
  default = 8,
}

const cssVars = {
  breakpoints,
  grid: {
    gutter,
    width: breakpoints,
  },
  breakpointsArray,
  colors: Colors,
  distances: Distances,
  fonts: Fonts,
  fontSizes: FontSizes,
  transitions: Transitions,
  zIndexes: ZIndexes,
  vars: Vars,
  borderRadius: borderRadius,
};

export default cssVars;
