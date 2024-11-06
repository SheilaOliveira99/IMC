export function notANumber(value) {
  return isNaN(value) || value == ""// validar se está vazio, retorna vdd
}   //Função que retorna se é verdadeiro (não sendo nº) e 
//falso (sendo nº).

export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}
