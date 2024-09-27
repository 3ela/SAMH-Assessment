<template>

  <form 
    @submit.prevent="formSubmit" v-if="!isLoading"
    :id="props.formOpts.formId || 'form'"  
  >
    <div>
      <div 
        v-for="(field, fieldInd) in props.formOpts.fields"
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

    <div
      class="form-btns"
    >
      <button
        v-if="props.formOpts.submitBtn"
        type="submit"
      >
        {{ $t(props.formOpts.submitBtn.text) || $t('Submit') }}
        <Icon
          v-if="props.formOpts.submitBtn.icon"
          :src="props.formOpts.submitBtn.icon"
          :size="20"
        ></Icon>
      </button>
    </div>
  </form>
</template>

<script setup>
import flatPickr from 'vue-flatpickr-component';
import vSelect from 'vue-select';
import 'flatpickr/dist/flatpickr.css';
import 'vue-select/dist/vue-select.css';
import SearchIcon from '~/assets/images/search.png';

const formData = ref({});
const isLoading = ref(false);
const props = defineProps(['formOpts']);

const emit = defineEmits(['submit']);

function formSubmit() {
  //* insure form validity if the form wasn't submitted normally
  //! used only when watched form is applied
  // let formEle = document.getElementById('form');
  // let isValid = formEle.reportValidity();
  // if(!isValid) {
  //   return false;
  // }

  //* check for parent submit function 
  if(props.formOpts.submitBtn && props.formOpts.submitBtn.fn) {
    //* if so run prent function 
    props.formOpts.submitBtn.fn(formData.value);
  } else {
    //* else emit submit event 
    emit('submit', formData.value);
  }
}

</script>