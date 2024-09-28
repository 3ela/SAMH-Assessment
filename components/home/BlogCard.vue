<template>

  <div 
    class="blog-card"
    @click="openBlogDetails"
  >
    <div class="img">
      <img 
        :src="slide.imageSrc"
        width="400"
        height="280"
      />
    </div>

    <div class="location">
      <img 
        src="~/assets/images/Location.png"
      />
      <div> {{ slide.location }} </div>
    </div>

    <h6>{{ slide.title }}</h6>
    <p class="duration">{{ slide.duration }}</p>
    <p class="price">{{ '$' + slide.price }}</p>

  </div>
  
</template>

<script setup>
const { slide } = defineProps(['slide']);

const router = useRouter();
function openBlogDetails() {
  router.push({
    path: `blog/${slide.key}`,
  })  
}
</script>