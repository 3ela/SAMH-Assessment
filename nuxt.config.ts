// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],

  i18n: {
    locales: [
      { code: 'ar', iso: 'ar-eg', name: 'العربية', file: 'ar', dir: 'rtl' },
      { code: 'en', iso: 'en-us', name: "English", file: 'en', dir: 'ltr' },
    ],
    defaultLocale: 'ar',
    strategy: 'prefix_and_default',
    langDir: 'locales/'
  }
})