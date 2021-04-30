module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#007FFF",
        accent1: "#17E9E1",
        accent2: "#F5FAFA",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: (theme) => ({}),
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      outline: ["active"],
      backgroundColor: ["active"],
      textColor: ["active"],
      borderRadius: ["hover", "focus", "active"],
    },
  },
  plugins: [],
};
