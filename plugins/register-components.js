
import Icon from '../components/misc/Icon.vue';
    
const components = { Icon };

export default defineNuxtPlugin((nuxtApp) => {
    Object.entries(components).forEach(([name, component]) => {
        nuxtApp.vueApp.component(name, component)
    })
});
   