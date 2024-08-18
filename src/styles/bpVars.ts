import cssVars from "./cssVars";

const bpVars = {
  spacings: {
    xs: {
      xs: cssVars.distances.xxs,
      xl: cssVars.distances.xs,
    },
    sm: {
      xs: cssVars.distances.xs,
      xl: cssVars.distances.sm,
    },
    md: {
      xs: cssVars.distances.sm,
      xl: cssVars.distances.md,
    },
    lg: {
      xs: cssVars.distances.md,
      xl: cssVars.distances.lg,
    },
    xl: {
      xs: cssVars.distances.lg,
      xl: cssVars.distances.xl,
    },
    xxl: {
      xs: cssVars.distances.xl,
      xl: cssVars.distances.xxl,
    },
    xxxl: {
      xs: cssVars.distances.xxl,
      xl: cssVars.distances.xxxl,
    },
    xxxxl: {
      xs: cssVars.distances.xxxl,
      xl: cssVars.distances.xxxxl,
    },
  },
  typos: {
    h1: {
      size: {
        xs: cssVars.fontSizes["5xl"],
        md: cssVars.fontSizes["7xl"],
        lg: cssVars.fontSizes["8xl"],
        xl: cssVars.fontSizes["9xl"],
      },
      weight: 300,
    },
    h2: {
      size: {
        xs: cssVars.fontSizes["4xl"],
        md: cssVars.fontSizes["6xl"],
        lg: cssVars.fontSizes["7xl"],
        xl: cssVars.fontSizes["8xl"],
      },
      weight: 300,
    },
    h3: {
      size: {
        xs: cssVars.fontSizes["3xl"],
        md: cssVars.fontSizes["5xl"],
        lg: cssVars.fontSizes["6xl"],
        xl: cssVars.fontSizes["7xl"],
      },
      weight: 300,
    },
    h4: {
      size: {
        xs: cssVars.fontSizes["2xl"],
        md: cssVars.fontSizes["4xl"],
        lg: cssVars.fontSizes["5xl"],
        xl: cssVars.fontSizes["6xl"],
      },
      weight: 500,
    },
    h5: {
      size: {
        xs: cssVars.fontSizes["xl"],
        md: cssVars.fontSizes["3xl"],
        lg: cssVars.fontSizes["4xl"],
        xl: cssVars.fontSizes["5xl"],
      },
      weight: 300,
    },
    h6: {
      size: {
        xs: cssVars.fontSizes["xl"],
        md: cssVars.fontSizes["3xl"],
        lg: cssVars.fontSizes["3xl"],
        xl: cssVars.fontSizes["4xl"],
      },
      weight: 300,
    },
    h7: {
      size: {
        xs: cssVars.fontSizes["lg"],
        md: cssVars.fontSizes["lg"],
        lg: cssVars.fontSizes["2xl"],
        xl: cssVars.fontSizes["3xl"],
      },
      weight: 300,
    },
    h8: {
      size: {
        xs: cssVars.fontSizes["lg"],
        md: cssVars.fontSizes["lg"],
        lg: cssVars.fontSizes["2xl"],
        xl: cssVars.fontSizes["2xl"],
      },
      weight: 500,
    },
    p: {
      size: {
        xs: cssVars.fontSizes["base"],
        md: cssVars.fontSizes["md"],
        lg: cssVars.fontSizes["lg"],
        xl: cssVars.fontSizes["xl"],
      },
      weight: 300,
    },
    p_mid: {
      size: {
        xs: cssVars.fontSizes["xs"],
        md: cssVars.fontSizes["sm"],
        lg: cssVars.fontSizes["md"],
        xl: cssVars.fontSizes["lg"],
      },
      weight: 300,
    },
  },
  sizes: {
    header_height: { xs: 80, xl: 104 },
  },
};

export default bpVars;
