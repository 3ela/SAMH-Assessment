
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

//* this function checks at the initial user entry
//* if the locale is ar to switch layout to rtl
function checkLocale() {
  if(locale.value == 'ar') {
    useHead({
      bodyAttrs: {
        direction: 'rtl'
      }
    })
  }
}

checkLocale();
</script>

<style lang="scss">
@import './assets/scss/index.scss';

</style>