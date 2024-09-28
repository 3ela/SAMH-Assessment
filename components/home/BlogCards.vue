<template>
  <section class="blog">
    <h6>{{ $t('blog.title') }}</h6>
    <p> {{ $t('blog.subTitle') }}</p>

    <swiper-container
      id="swiper-container"
      v-if="!largeScreens"
    >
      <swiper-slide
        v-for="slide in slides"
        :key="slide.id"
         class="blog-cards"
      >
        <BlogCard 
          :slide="slide"
        />
      </swiper-slide>
    </swiper-container>

    <div
      v-else
      class="blog-cards"
    >
      <BlogCard 
        v-for="slide in slides"
        :key="slide.id"
        :slide="slide"
      />
    </div>
  </section>
</template>

<script setup>
import blogData from '~/content/temp-blog-data.json';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import BlogCard from './BlogCard.vue';
// register Swiper custom elements
register();

const slides = ref([]);
const largeScreens = useLargeScreens();
initSlidesData();

onMounted(() => {
  if(!largeScreens.value) {
    const swiperEl = document.getElementById('swiper-container');
    const swiperOpts = {
      init: false,
      slidesPerView: 1,
      speed: 300,
      centeredSlides: true,
      spaceBetween: 50,
  
    }
  
    
    Object.assign(swiperEl, swiperOpts);
    swiperEl.initialize();
  }
});

function initSlidesData() {

  for (const [key, value] of Object.entries(blogData)) {
    let slide = {
      ...value,
      imageSrc: `_nuxt/assets/images/blog/${key}.jpg`,
      key
    };
    slides.value.push(slide);
  }

}
</script>