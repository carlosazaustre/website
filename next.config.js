const { withGoogleFonts } = require("nextjs-google-fonts");

module.exports = withGoogleFonts({
  googleFonts: {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap",
    ],
  },
});
