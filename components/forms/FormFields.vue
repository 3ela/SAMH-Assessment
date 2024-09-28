<template>

  <form 
    @submit.prevent="formSubmit" v-if="!isLoading"
    :id="props.formOpts.formId || 'form'"  
  >
    <div class="form-row">
      <div 
        v-for="(field, fieldInd) in props.formOpts.fields"
        :key="fieldInd"
        :class="field.class"
        class="col"
      >
        <div class="input-holder">
          <label
            :for="field.name"
            v-if="field.name"
          >
            <img 
              v-if="field.icon"
              :src="field.icon"
              width="18"
              height="18"
            />
            <span>{{ $t(`fields.${field.name}`) }}</span>
          </label>
          
          <flat-pickr 
            v-if="field.type == 'date'"
            class="form-date"
            v-model="formData[field.model]"
            :config="{
              dateFormat: 'Y-m-d',
              altInput: true,
              altFormat: 'd-m-Y',
            }"
            :id="field.name"
            :placeholder="field.placeholder"
            :required="field.required"
          >
            <input required/>
          </flat-pickr>
          <vSelect 
            v-else-if="field.type == 'searchSelect'"
            class="form-select"
            v-model="formData[field.model]"  
            :reduce="resolveReduce(field)"
            :options="field.options" 
            :label="field.text"
            :placeholder="field.placeholder"
            :id="field.name"
          >
            <template #search="{attributes, events}">
              <input
                class="vs__search"
                :required="!formData[field.model]"
                v-bind="attributes"
                v-on="events"
              />
            </template>
          </vSelect>
          <div
            v-else-if="field.type == 'radio'"
            :id="field.name"
            class="form-radio"
          >
            <div
              v-for="(opt, optInd) in field.options"
              :key="optInd"
              class="form-radio-opt"
            >
              <input 
                type="radio"
                :value="opt.value"
                :id="opt.value"
                v-model="formData[field.model]"
              />
              <label :for="opt.value">
                {{ $t(opt.text) }}
              </label>

            </div>
          </div>

          <input  
            v-else-if="field.type == 'number'"
            class="form-input"
            :id="field.name"
            :type="field.type"
            v-model.number="formData[field.model]"
            :placeholder="field.placeholder"
            :required="field.required"
          />
          <input 
            v-else
            class="form-input"
            :id="field.name"
            :type="field.type"
            v-model="formData[field.model]"
            :placeholder="field.placeholder"
            :required="field.required"
          />

        </div>
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
onMounted(() => {
  initFormValues();
})

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
function resolveReduce(field) {
  if(field.reduce) {
    return field.reduce;
  } else {
    return (item) => item.id;
  }
}
function initFormValues() {
  props.formOpts.fields.forEach(field => {
    if(field.initValue) {
      formData.value[field.model] = field.initValue;
    }
  })
}
</script>