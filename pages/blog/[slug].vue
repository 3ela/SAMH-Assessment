<template>

  <div>
    <img 
      :src="imageSrc"
      width="100"
    /> 
    {{ currentBlog.description }}
  </div>

</template>

<script setup>
import blogData from '~/content/temp-blog-data.json';
const route = useRoute();
const currentBlog = ref({});
const slug = useRoute().params.slug;

currentBlog.value = blogData[route.params.slug];

useHead({
  title: `Blog - ${slug}`
})


</script>