const inputNome = document.getElementById('inputNome')
const displayNome = document.getElementById('nomeDisplay')

const inputCargo = document.getElementById('inputCargo')
const displayCargo = document.getElementById('cargoDisplay')

const inputCor = document.getElementById('inputCor')
const headerCor = document.getElementById('headerCor')
const btnCor = document.getElementById('btnCor')
// Criando um evento para o campo de nome, para atualizar quando digitar em tempo real
// Aqui definimos uma funcao que vai ser executada enquanto estiver "escutando" o input, que no caso é quando o usuario digita 
inputNome.addEventListener('input', () => {
    atualizarInput(inputNome, displayNome);
});

inputCargo.addEventListener('input', () => {
    atualizarInput(inputCargo, displayCargo)
})

inputCor.addEventListener('input', () => {
    headerCor.style.background = inputCor.value
    btnCor.style.background = inputCor.value 
})







// Funcao só para atualizar input
function atualizarInput(input, display){
    display.innerText = input.value
}



