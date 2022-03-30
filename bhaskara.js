function delta(a, b, c){
 return (b*b) - (4*(a*c))

}

function bhaskara(a, b, c){
  const valorDelta = delta(a, b, c)
  if (valorDelta < 0)
    return ({x1: "Inexistente", x2: "Inexistente"})
  else {
    const valor_x1 = (-b + Math.sqrt(valorDelta)) / (2* a)
    const valor_x2 = (-b - Math.sqrt(valorDelta)) / (2* a)
    return ({x1: valor_x1, x2: valor_x2})
  }

}

function hamdleBtncalcular (){
const vA = document.getElementById ('valorA').value
const vB = document.getElementById ('valorB').value
const vC = document.getElementById ('valorC').value
const raizes = bhaskara(vA, vB, vC)
document.getElementById('resultadoX1').innerHTML = raizes.x1
document.getElementById('resultadoX2').innerHTML = raizes.x2

}
document.getElementById('btnCalcular').addEventListener('click', hamdleBtncalcular)