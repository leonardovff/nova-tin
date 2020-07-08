import readline from 'readline';

import { ConverterFarenheitToCelsius } from './converter-farenheit-to-celsius';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Calculadora de farenheit para celsius")

rl.question("Qual número deve ser convertido? ", function(input) {
  rl.close();
  const farenheit = Number(input);
  const celsius = ConverterFarenheitToCelsius(farenheit);
  console.log(`O valor fornecido (${farenheit}) em farenheit é ${celsius} em celsius`)
  process.exit();
});
