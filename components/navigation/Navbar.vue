<template>

  <header class="navbar">
    <!-- logo -->
    <div class="logo">
      <img 
        src="../../assets/images/logo.png"
        width="180"
        height="40"
         @click="$router.push('/')"
      />
    </div>
    
    <!-- navabr links -->
    <div class="links" v-if="largeScreens">
      <NuxtLink 
        v-for="link in links"
        :to="link.route"
        class="link"
      > 
        {{ link.text }}
      </NuxtLink>
    </div>

    <!-- language switch / profile and auth  -->
    <div class="right-side">
      <NavigationLanguageSwitch />

      <div v-if="largeScreens">
        <button class="login-btn">
          {{ $t('Sign In') }}
        </button>
      </div>
    </div>

  </header>

</template>

<script setup>
const largeScreens = useLargeScreens();
const links = [
  { text: "Home", route: '/' },
  { text: "Blog", route: '/blog' },
  // { text: "My Booking", route: 'booking' },
]

</script>