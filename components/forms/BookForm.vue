

<template>

  <FormsFormFields 
    :formOpts="formOpts"
    @submit="setFormData"
  />

</template>


<script setup>
import SearchIcon from '~/assets/images/search.png';

const formData = ref({});
const fields = [
  { 
    type: "date",
    model: "tripDate",
  },
  { 
    type: "searchSelect",
    model: "ticketClass",
  },
  { 
    type: "radio",
    model: "tripType",
  },
  { 
    type: "number",
    model: "tripPassengers",
    required: true
  },
];

const formOpts = {
  submitBtn: {
    text: ' ',
    icon: SearchIcon
  },
  fields
}

function setFormData(data) {
  formData.value = data;
}

</script>