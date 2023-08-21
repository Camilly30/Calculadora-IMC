
window.onload = () => {
    "use strict";
    if("ServiceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};



const resultado = document.querySelector('resultado')
const altura = document.querySelector('altura')
const peso = document.querySelector('peso')
const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');


  if (nome !== '' && altura !== '' && peso !== '') {

    const valorIMC = (peso / (altura * altura)).toFixed(1);
     if (valorIMC<18.5) {
      resultado.textContent =  `Olá Sr(a) ${nome}, você está abaixo do peso, seu IMC: ${valorIMC}` 
     }
     else
     if (valorIMC<24.9 ) {
      resultado.textContent =  `Olá Sr(a) ${nome}, você está no seu peso Ideal, seu IMC: ${valorIMC}`

     }
     else if (valorIMC<29.9) {
      resultado.textContent =  `Olá Sr(a) ${nome}, você está acima do peso, seu IMC: ${valorIMC}`
     }

     else if (valorIMC<34.9) {
      resultado.textContent =  `Olá Sr(a) ${nome}, você está com Obesidade Grau I, seu IMC: ${valorIMC}`

     } else if (valorIMC<39.9){
      resultado.textContent =  `Olá Sr(a) ${nome}, você está com Obesidade Grau II, seu IMC: ${valorIMC}`

     }else if (valorIMC<40){
        resultado.textContent =  `Olá Sr(a) ${nome}, você está com Obesidade Grau III, seu IMC: ${valorIMC}`
  
       }
     
     else {
      resultado.textContent =  `Olá Sr(a) ${nome}, você está com Obesidade Grau II, Cuidado!!! seu IMC: ${valorIMC}`
     }


  } else {
    resultado.innerHTML = 'Preencha todos os Campos!!!';
    
  }

}

calcular.addEventListener('click', imc);