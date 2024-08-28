// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 4000,
  }, 
  css: [
    '~/assets/variables.scss',
    '~/assets/styles.css',
    '~/assets/style.css',
    '@mdi/font/css/materialdesignicons.min.css',
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',

  ],
})
