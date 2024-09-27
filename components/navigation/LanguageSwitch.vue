<template>

  <div class="language-switch">

    <button
      @click="openDropdown"
      
    >
      {{ locale }}
    </button>
    {{ isDropdownOpen }}
    <div
      class="dropdown"
      id="lang-dropdown"
      :class="{
        'visible': isDropdownOpen
      }"
    >
      <div
        class="dropdown-item"
        v-for="lang in locales"  
        @click="switchLanguage(lang)"
      >
        {{ lang.name }}
      </div>
    </div>

  </div>

</template>

<script setup>

const { locale, locales, setLocale  } = useI18n()
const isDropdownOpen = ref(true);

function openDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;

}

//* this. function change the current locale when the user choose a language 
//* from the language switch dropdown
function switchLanguage(lang) {
  setLocale(lang.code);
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