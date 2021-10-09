let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let desccricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');


let etapaAtual = 0;
let numero = "";
let brancoo=false;
function comecarEtapa() {
    numero="";
    brancoo=false;
    let etapa = etapas[etapaAtual];
    let numeroHtml = "";

    for (let i = 0; i < etapa.numeros; i++) {
        numeroHtml += '<div class="numero"></div>';
        if (i === 0) {
            numeroHtml = '<div class = "numero pisca"></div>';
        }
    }


    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    desccricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}


function clicou(n) {
    let elnumero = document.querySelector('.numero.pisca');


    if (elnumero !== null) {
        elnumero.innerHTML = n;
        numero = `${numero}${n}`;


        elnumero.classList.remove('pisca');
        if (elnumero.nextElementSibling !== null) {
            elnumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface();
        }
    }

}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {


        if (item.numero === numero) {
            return true
        } else {
            return false
        }

    });
    if (candidato.length > 0) {
        candidato = candidato[0]
        seuVotoPara.style.display = 'block';
        desccricao.innerHTML = `Candidato: ${candidato.nome}<br/> Partido: ${candidato.partido}`;
        aviso.style.display = 'block';
        let fotosHtml = '';
        for (let i in candidato.fotos) {
            fotosHtml += `  <div class="d-1-image"><img src="../imagens/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda} </div>`

        }
        lateral.innerHTML = fotosHtml;
    } else {
        seuVotoPara.style.display = "block";
        aviso.style.display = 'block';
        desccricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO <div>';
      
   
        
    }


}




function branco() {
    
    if(numero===""){
        brancoo=true;
    numeros.innerHTML="";
    seuVotoPara.style.display = "block";
    aviso.style.display = 'block';
    desccricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO <div>';
}

alert("Para voltar o branco não ode ter digitado em nenhum numero")
}

function corrige() {

    comecarEtapa();
}

function confirma() {
    alert("cicou em confirma")
}

comecarEtapa();