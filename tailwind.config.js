module.exports = {
  prefix: 'tw-',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        vlight: "rgba(190, 131, 44, 0.24)",
        medium: "rgba(239, 79, 36, 0.5)",
        light: "rgba(239, 79, 36, 0.3)",
        DEFAULT: "#EF4F24",                                   
      },
      red: {
        medium: "#FF0000",
        DEFAULT: "#FF0202",
        dark: "#D02828", 
        light: "#F67272"
      },
      white: {
        vlight: "rgba(255, 255, 255, 0.2)",
        DEFAULT: "#ffffff"
      },
      black: {
        1: "rgba(0, 0, 0, 0.1)",
        2: "rgba(0, 0, 0, 0.2)",
        3: "rgba(0, 0, 0, 0.3)",
        4: "rgba(0, 0, 0, 0.4)",
        5: "rgba(0, 0, 0, 0.5)",
        6: "rgba(0, 0, 0, 0.6)",
        7: "rgba(0, 0, 0, 0.7)",
        8: "rgba(0, 0, 0, 0.8)",
        9: "rgba(0, 0, 0, 0.9)",
        DEFAULT: "#000000",
      },
      linearGradient: {
        DEFAULT: "linear-gradient(70.4deg, #EF4F24 44.69%, rgba(239, 204, 32, 0.75) 104.33%)",
        medium: "linear-gradient(14.97deg, #EF4F24 15.63%, #EFCC20 107.19%);"
      },
      boxShadow: {
        sm: "1px 1px 4px 3px rgba(239, 79, 36, 0.05)",
        DEFAULT: "4px 4px 5px rgba(94, 94, 94, 0.15)"
      },
      success: {
        medium: '#2C843F', 
        light: '#39C794', 
        DEFAULT: '#418759 ',
      },
      grey: {
        50: '#f5f5f5',
        100: '#e9e9e9',
        200: '#dadada',
        300: '#c5c5c5',
        400: '#A3A3A3',
        500: '#979797',
        600: '#696969',
        700: '#535353',
        800: '#0B0808',
        900: '#020202',
      }, 
      warning: {
        dark: '#fba422',
        light: '#C6BE77',
        DEFAULT: '#D2C551',
      },
      brown: {
        light: "#BB8E65"
      }
    },
    extend: {
      gridTemplateColumns: {
        dashboard: "1fr 2fr",
      },
    },
  },
  plugins: [],
};
