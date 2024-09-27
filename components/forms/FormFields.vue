<template>

  <form @submit.prevent="submit">
    <div>
      <div 
        v-for="(field, fieldInd) in fields"
        :key="fieldInd"
        :class="field.class"
      >
        <label
          :for="field.name"
          v-if="field.name"
        >
          {{ $t(field.name) }}
        </label>
        <flat-pickr 
          v-if="field.type == 'date'"
          v-model="formData[field.model]"
          :id="field.name"
          :required="field.required"
        />
        <vSelect 
          v-else-if="field.type == 'searchSelect'"
          v-model="formData[field.model]"  
          :required="field.required"
          :id="field.name"
        />
        <div
          v-else-if="field.type == 'radio'"
          :id="field.name"
        >
          <input 
            v-for="(opt, optInd) in field.options"
            :key="optInd"
            type="radio"
            v-model="formData[field.model]"
            :required="field.required"
          />

        </div>

        <input 
          v-else-if="field.type == 'number'"
          :id="field.name"
          :type="field.type"
          v-model.number="formData[field.model]"
          :required="field.required"
        />
        <input 
          v-else
          :id="field.name"
          :type="field.type"
          v-model="formData[field.model]"
          :required="field.required"
        />

      </div>
    </div>    
  </form>
</template>

<script setup>
import flatPickr from 'vue-flatpickr-component';
import vSelect from 'vue-select';
import 'flatpickr/dist/flatpickr.css';
import 'vue-select/dist/vue-select.css';

const formData = ref({});
const props = defineProps(['fields']);

defineEmits(['submit']);

</script>