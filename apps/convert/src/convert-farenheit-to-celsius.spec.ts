import { ConvertFarenheitToCelsius } from './convert-farenheit-to-celsius';

describe('Converter', () => {

  it('should converter farenheit to celsius in number inferior limit: 1', () => {
    const data = ConvertFarenheitToCelsius(1);
    expect(data).toEqual(-17)
  });

  it('should converter farenheit to celsius in number upper limit: 300', () => {
    const data = ConvertFarenheitToCelsius(300);
    expect(data).toEqual(148)
  });

  it('should not allow converter farenheit to celsius with invalid number', () => {
    const data = ConvertFarenheitToCelsius(NaN);
    expect(data).toBe(false);
  });
});
