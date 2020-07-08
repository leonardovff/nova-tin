import { ConverterFarenheitToCelsius } from './converter-farenheit-to-celsius';

describe('Converter', () => {

  it('should converter farenheit to celsius in number inferior limit: 1', () => {
    const data = ConverterFarenheitToCelsius(1);
    expect(data).toEqual(-17.22222222222222)
  });

  it('should converter farenheit to celsius in number upper limit: 300', () => {
    const data = ConverterFarenheitToCelsius(300);
    expect(data).toEqual(148.88888888888889)
  });

  it('should not allow converter farenheit to celsius with invalid number', () => {
    const data = ConverterFarenheitToCelsius(NaN);
    expect(data).toBe(false);
  });
});
