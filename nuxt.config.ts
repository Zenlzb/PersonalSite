// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "nuxt-font-loader",
  ],
  colorMode: { classSuffix: "" },
  fontLoader: {
    external: [
      {
        src: "https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap",
        family: "Nunito Sans",
      },
    ],
  },
});
