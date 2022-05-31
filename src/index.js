// TODO 1:
// Implemente a função calculateImc para que ela receba os valores
// de Peso e Altura e retorne o valor do IMC e a descrição do IMC .

// Exemplo de retorno:  { imc: 23, description: "Sobrepeso" }
// Você pode usar o array de opções imcResultOptions.js para descrever o retorno.

// TODO 2:
// Retornar o erro: "weight and height are required" se não receber os valores de peso e altura.

// TODO 3:
// Retornar o erro: "weight and height cannot be negative" se os valores de peso ou altura forem negativos.

// TODO 4:
// Retornar o erro:  "weight and/or height are not numbers" se os valores de peso ou altura não forem números.

const options = require('./imcResultOptions')

const weight = 80
const height = 1.75

function calculateImc(weight, height) {
  const imcValue = (weight / Math.pow(height, 2))
  for (i = 0; i < options.length; i++){
    if(imcValue >= options[i].min && imcValue < options[i].max){
      return `Imc: ${Math.round(imcValue)}, description: ${options[i].description}`
    }
  }
}

module.exports = calculateImc;

console.log(calculateImc(weight, height))

