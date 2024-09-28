
# Plugins & Packages

## Plugins & Modules

- @nuxtjs/i18n: is used to add internationalization and locale translation to the project, also help with changing the direction between RTL & LTR.

- register-components: is a custom made plugin that register components to the current Vuejs instance to be used globaly inside the project.

## Packages & Libraries

- @vueuse/core: Offers a collection of essential Vuejs composition utilities.
- swiper: A package used to build modern slider components which support mobile touch.
- vue-flatpickr: A Vuejs wrapper component for flatpicker, Which is a lightweight and powerful datetime picker[^1].
- vue-select: Vue Select is a feature rich select/dropdown/typeahead component[^1].


- sass (*Dev Dependency[^2]*): This package allow the usage of `.scss` files for the project styling.


[^1]: Both vue-flatpickr and vue-select are used inside `FormFields.vue` to build a dynamic class based component that can render forms.

[^2]: Development dependencies are not included during build. 