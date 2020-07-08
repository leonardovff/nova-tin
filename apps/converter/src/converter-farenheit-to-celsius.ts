export const ConverterFarenheitToCelsius = (farenheit: number) => {
  if(isNaN(farenheit)){
    return false;
  }
  return 5 * (farenheit -32 ) / 9;
}
