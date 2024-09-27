<template>
  <svg 
    v-if="icon"
    :height="size || 20" 
    :width="size || 20"
    :viewBox="`0 0 24 24`"
  >
    <path 
      :fill="fill"
      :d="icon"
    ></path>
  </svg>

  <img 
    v-if="src"
    :src="src"
    :height="size || 20" 
    :width="size || 20"
  />
</template>

<script>

export default {
  props: [
    'src',
    'icon', 
    'size', 
    'fill',
  ],
}
</script>