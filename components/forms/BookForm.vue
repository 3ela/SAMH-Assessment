

<template>

<FormsFormFields 
  :fields="fields"
/>
</template>


<script setup>


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
  },
]

</script>