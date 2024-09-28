<template>

  <div class="language-switch">

    <button
      @click="openDropdown"
      id="dropdown-btn"
    > 
      <img 
        :src="`/${locale}.png`"
        width="18"
        height="18"
        id="btn-img"
      />
      <p>{{ $t(locale) }}</p>
    </button>

    <div
      class="dropdown"
      id="lang-dropdown"
      ref="langDropdown"
      :class="{
        'visible': isDropdownOpen
      }"
    >
      <div
        class="dropdown-item"
        v-for="lang in locales"  
        @click="switchLanguage(lang)"
      >
        <img 
           :src="`/${lang.code}.png`"
          width="18"
          height="18"
        />
        <p>{{ lang.name }}</p>
      </div>
    </div>

  </div>

</template>

<script setup>
import { onClickOutside } from '@vueuse/core';
const { locale, locales, setLocale  } = useI18n()
const isDropdownOpen = ref(false);

const langDropdown = ref(null)
onMounted(() => {
  onClickOutside(langDropdown, event => {
    let arr = ['dropdown-btn', 'btn-img'];
    if (!arr.includes(event.target.id)) {
      isDropdownOpen.value = false;
    }
  })
})

function openDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

//* this. function change the current locale when the user choose a language 
//* from the language switch dropdown
function switchLanguage(lang) {
  setLocale(lang.code);
  openDropdown();
  if(lang.code == 'ar') {
    useHead({
      bodyAttrs: {
        direction: 'rtl'
      }
    })
  } else {
    useHead({
      bodyAttrs: {
        direction: 'ltr'
      }
    })
  }
}

</script>