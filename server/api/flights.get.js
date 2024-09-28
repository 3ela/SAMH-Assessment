import flights from '~/content/temp-flight-data.json';

export default defineEventHandler(async (event) => {
  let result = [];
  const { trip_type, trip_class } = getQuery(event);

  for (const [key, value] of Object.entries(flights)) {
    if(value.type == trip_type && value.class == trip_class) {
      result.push(value);
    }
  }
  
  return result;
})
