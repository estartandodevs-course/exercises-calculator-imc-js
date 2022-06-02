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



const isParamsValid = (weight, height) => {
  if (weight == undefined || height == undefined){
    throw new Error('weight and height are required')
  } else if ( weight < 0 || height < 0 ){
  throw new Error('weight and height cannot be negative')
  } else if ( isNaN(weight) || isNaN(height)){
  throw new Error('weight and/or height are not numbers')
  }
}

const getDescription = (options, imc) => {
  let desc = "";
  options.forEach((el) => {
    const { min, max, description } = el
    if (imc >= min && imc <= max){
      desc = description ;
    }
  })
  return desc;
}

function calculateImc(weight, height) {
  // TODO: Implemente aqui

  let imc = Math.floor(((weight / Math.pow(height,2) * 10000 ))); // imc = 17
  let desc = getDescription(options,imc); // desc = "Abaixo do peso"

  isParamsValid(weight,height)

  return {
    imc : imc,
    description: desc
  }
  // { imc: 17, description: 'Abaixo do peso' }
}


module.exports = calculateImc;
