<template>

  <header class="navbar">
    <!-- logo -->
    <div class="logo">
      <img 
        src="../../assets/images/logo.png"
        width="180"
        height="40"
      />
    </div>

    <!-- navabr links -->
     <div class="links">
      <NuxtLink 
        v-for="link in links"
        :to="link.route"
      > 
        {{ link.text }}
      </NuxtLink>
     </div>

    <!-- language switch / profile and auth  -->
    <div class="right-side">
      <NavigationLanguageSwitch />

      <div>
        <button class="login-btn">
          {{ $t('Sign In') }}
        </button>
      </div>
    </div>

  </header>

</template>

<script setup>

const links = [
  { text: "Home", route: '/' },
  { text: "Promo", route: 'promo' },
  { text: "My Booking", route: 'booking' },
]

</script>