export const COLORS = {
  white: `0, 69%, 100%`,
  black: `69, 69%, 0%`,
  gray: {
    base: `220 33% 51%`,
    superLight: `220 44% 81%`,
    light: `221 37% 65%`,
    dark: `220 31% 28%`,
    superDark: `220 31% 17%`,
  },
  green: {
    base: `165 52% 59%`,
    superLight: `167 100% 74%`,
    light: `166 83% 70%`,
    dark: `168 36% 37%`,
    superDark: `167 36% 15%`,
  },
  orange: {
    base: `73 100% 75%`,
    superLight: `38 100% 90%`,
    light: `73 100% 82%`,
    dark: `34 93% 63%`,
    superDark: `34 55% 43%`,
  },
  red: {
    base: `349 100% 72%`,
    superLight: `350 100% 98%`,
    light: `350 100% 80%`,
    dark: `347 90% 55%`,
    superDark: `348 74% 37%`,
  },
};

export const BREAKPOINTS = {
  tabletMin: 600,
  laptopMin: 950,
  desktopMin: 1300,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};
