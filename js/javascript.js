let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let desccricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;

function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    let numeroHtml="";
for(let i=0<etapa.numeros;i++){
    numeroHtml += '<div class="numero"><'
}

    seuVotoPara.style.display='none';
    cargo.innerHTML=etapa.titulo;
    desccricao.innerHTML='';
    aviso.style.display='none';
    lateral.innerHTML='';
    numeros.innerHTML=numeroHtml;
}

function clicou(n){
    
}

function branco(){
    alert("cicou em branco")
}

function corrige(){
    
    comecarEtapa();
}

function confirma(){
    alert("cicou em confirma")
}

comecarEtapa();
