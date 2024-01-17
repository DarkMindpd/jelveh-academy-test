/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        IranSans: ["IRANSans", "sans-serif"],
        IranSansBold: ["IRANSansBold", "sans-serif"],
        iranSansNum: ["IRANSansNum", "sans-serif"],
        IranSansNumBold: ["IRANSansNumBold", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
        poppinsBold: ["poppinsBold", "sans-serif"],
        DanaRegular: ["DanaRegular", "sans-serif"],
        DanaBold: ["DanaBold", "sans-serif"],
        MorabbaRegular: ["MorabbaRegular", "sans-serif"],
        MorabbaBold: ["MorabbaBold", "sans-serif"],
        MorabbaExtraBold: ["MorabbaExtraBold", "sans-serif"],
      },
      colors: {
        "regal-blue": "#00A9FF",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
