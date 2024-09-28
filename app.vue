
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const headMeta = {
  title: "Goose Flights",
  meta: [
    { name: 'description', content: "Book Your Flights to Riyadh" }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png'}
  ]
}
//* this function checks at the initial user entry
//* if the locale is ar to switch layout to rtl
function checkLocale() {
  if(locale.value == 'ar') {
    useHead({
      ...headMeta,
      bodyAttrs: {
        direction: 'rtl'
      }
    })
  } else {
    useHead({
      ...headMeta,
      bodyAttrs: {
        direction: 'ltr'
      }
    })
  }
}

checkLocale();
</script>

<style lang="scss">
@import './assets/scss/index.scss';

</style>