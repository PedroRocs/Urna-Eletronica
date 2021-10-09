let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let desccricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');

let etapaAtual = 0;

function comecarEtapa(){
    let etapa = etapa[etapaAtual];
    let numeroHtml="";
    seuVotoPara.style.display='none';
    cargo.innerHTML=etapa.titulo;
    desccricao.innerHTML='';
    aviso.style.display='none';
    lateral.innerHTML='';
    numeros.innerHTML=numeroHtml;
}

function clicou(n){
    alert("clicou em" +n)
}

function branco(){
    alert("cicou em branco")
}

function corrige(){
    alert("cicou em corrige")
}

function confirma(){
    alert("cicou em confirma")
}

comecarEtapa();
