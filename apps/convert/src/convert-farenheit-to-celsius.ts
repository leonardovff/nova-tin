export const ConvertFarenheitToCelsius = (farenheit: number) => {
  if(isNaN(farenheit)){
    return false;
  }
  return parseInt((5 * (farenheit -32 ) / 9).toString());
}
