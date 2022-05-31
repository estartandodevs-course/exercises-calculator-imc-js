const options = require('./imcResultOptions');

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

function calculateImc(weight, height) {
  // TODO: Implemente aqui


  let imc = Math.floor(((weight / (height/100 * height/100))));
  let desc = '';


   const getDescription = (options) => {
     options.forEach((el) => {
      const { min, max, description } = el
      if (imc >= min && imc <= max){
        desc =  description;
      }
    })
  }
  getDescription(options)

  const isParamsValid = (weight, height) => {
    if (weight == undefined && height == undefined){
      throw new Error('weight and height are required')
    } else if (height == undefined){
    throw new Error('weight and height are required')
    }

    if ( weight < 0 || height < 0 ){
    throw new Error('weight and height cannot be negative')
    } else if ( isNaN(weight) || isNaN(height)){
    throw new Error('weight and/or height are not numbers')
    }
  }

  isParamsValid(weight,height)

  return {
    imc : imc,
    description: desc
  }
}



module.exports = calculateImc;
