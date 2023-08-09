/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        panelHeaderBackground: "#202c33",
        appBackground: "#111b21",
        iconColor: "#aebac1",
        iconLighterColor: "#8696a0",
        thinBorderColor: "#8696a026",
        inputMessageBackground: "#2a3942",
        sentMessageBackground: "#005c4b",
        receivedMessageBackground: "#202c33",
        tealColor: "#008069",
      },
    },
  },
  plugins: [],
};
