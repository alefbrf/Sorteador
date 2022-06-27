let boT = document.querySelector('.button1');
let optionsNumbers = [];

function salvar(){
    let quantidade = document.querySelector('.quantity').value;
    localStorage.setItem("qtd",quantidade);
}
function salvar2(){
     let valor2 = document.querySelector('.value2').value;
    localStorage.setItem("v2",valor2);
}

boT.addEventListener('click', (e) => {
    exibeResultado();
    let esconde = document.querySelector('.hidden')
    if(e.target){
        esconde.classList.add('exibeNum')
    }
})