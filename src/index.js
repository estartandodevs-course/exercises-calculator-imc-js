// TODO 1:
// Implemente a função calculateImc para que ela receba os valores
// de Peso e Altura e retorne o valor do IMC e a descrição do IMC .

const options = require("./imcResultOptions");

// Exemplo de retorno:  { imc: 23, description: "Sobrepeso" }
// Você pode usar o array de opções imcResultOptions.js para descrever o retorno.

// TODO 2:
// Retornar o erro: "weight and height are required" se não receber os valores de peso e altura.

// TODO 3:
// Retornar o erro: "weight and height cannot be negative" se os valores de peso ou altura forem negativos.

// TODO 4:
// Retornar o erro:  "weight and/or height are not numbers" se os valores de peso ou altura não forem números.

function calculateImc(weight, height) {
  const IMC = weight / ((height/100)*(height/100));
  const result  = options.find(option => {
    if(IMC >= option.min && IMC <= option.max) {
      return option
    }
  })

  return {
    imc: Number.parseInt(IMC, 10),
    description: result?.description
  }
  // TODO: Implemente aqui
}

module.exports = calculateImc;
