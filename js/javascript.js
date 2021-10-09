let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let desccricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');


let etapaAtual = 0;
let numero = "";
let brancoo = false;
let votos=[];


function comecarEtapa() {
    numero = "";
    brancoo = false;
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
            if(candidato.fotos[i].small){
                fotosHtml += `  <div class="d-1-image small"><img src="../imagens/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda} </div>`
            }
            else{
                fotosHtml += `  <div class="d-1-image"><img src="../imagens/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda} </div>`
            }
            lateral.innerHTML = fotosHtml;
               
            }

        }
        else {
            seuVotoPara.style.display = "block";
            aviso.style.display = 'block';
            desccricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO <div>';
            
        }
        if(etapas[etapaAtual] == undefined){
            
            tela.innerHTML="";
        }
        
       
    } 

    






function branco() {
    numero = "";
    if (numero === "") {
        brancoo = true;
        numeros.innerHTML = "";
        seuVotoPara.style.display = "block";
        aviso.style.display = 'block';
        desccricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO <div>';
        lateral.innerHTML = "";

    }

}

function corrige() {
    comecarEtapa();
}

function confirma() {
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;
    
  
    if (brancoo === true ) {
        votoConfirmado = true;
        
        console.log(etapaAtual);
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            votos:'branco'
        });}
        else if(numero.length === etapa.numeros){
            votoConfirmado = true;
           
            votos.push({
                etapa: etapas[etapaAtual].titulo,
                votos:numero 
            });
        }
        if(votoConfirmado){
            etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa();
        }
        else{
            let tela = document.querySelector('.tela');
            tela.innerHTML="<div class='final pisca'>FIM</div>"
            console.log(votos)
        }
    }

        }

       
  

    

    
      
teclas()

comecarEtapa();