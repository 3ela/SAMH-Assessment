

<template>
  <div class="book-form">

    <FormsFormFields 
      :formOpts="formOpts"
      @submit="submit"
    />
  </div>

</template>


<script setup>
import SearchIcon from '~/assets/images/search.png';
import CalendarIcon from '~/assets/images/calender.png';
import AirlineIcon from '~/assets/images/airline_seat.png';
import FamilyIcon from '~/assets/images/family.png';

const formData = ref({});
const tripTypes = [
  { text: 'One-way', value: 'oneWay' },
  { text: 'Round-trip', value: 'round' },
];
const tripClass = [
  { text: 'Economy', id: 'eco' },
  { text: 'Business ', id: 'business' },
  { text: 'First ', id: 'first' },
];
const fields = [
  { 
    name: "Trip Date",
    type: "date",
    model: "tripDate",
    placeholder: 'DD-MM-YYYY',
    class: 'col-3',
    initValue: new Date(),
    required: true,
    icon: CalendarIcon
  },
  { 
    name: "Trip Class",
    type: "searchSelect",
    model: "ticketClass",
    options: tripClass,
    text: 'text',
    class: 'col-3',
    placeholder: 'Select Class',
    required: true,
    icon: AirlineIcon
  },
  { 
    name: "Trip Type",
    type: "radio",
    model: "tripType",
    class: 'col-3',
    required: true,
    initValue: 'round',
    options: tripTypes
  },
  { 
    name: "Passengers",
    type: "number",
    model: "tripPassengers",
    placeholder: 'No. of Passengers',
    required: true,
    class: 'col-3',
    icon: FamilyIcon
  },
];

const formOpts = {
  submitBtn: {
    text: ' ',
    icon: SearchIcon,
  },
  fields
}

function setFormData(data) {
  formData.value = data;
}

async function submit(data) {
  const flights = await useFetch('/api/flights', {
    method: 'get',
    query: {
      trip_type: data.tripType,
      trip_class: data.ticketClass,
    }
  })
  
  let msg = ``;
  flights.data.value.forEach(fl => msg += `${fl.title} \n`)
  console.log("submit => msg:", msg)
  alert(
    `results found (${flights.data.value.length}) \n\n` 
    + msg
  )
} 

</script>