let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
let tentativas = 6;

const palavras = [
    palavra001 = {
        nome : "Brasil",
        categorias : "Paises"
    },
    palavra002 = {
        nome: "China",
        categorias: "Paises"
    },
    palavra003 = {
        nome: "Equador",
        categorias: "Paises"
    },
    palavra004 = {
        nome: "Canada",
        categorias: "Paises"
    },
    palavra005 = {
        nome: "Argetina",
        categorias: "Paises"
    },
    palavra006 = {
        nome: "Japão",
        categorias: "Paises"
    },
    palavra007 = {
        nome:"Inglaterra",
        categorias: "Paises"
    },
    palavra008 = {
        nome: "Alemanha",
        categorias: "Paises"
    },
    palavra009 = {
        nome: "Espanha",
        categorias: "Paises"
    },
    palavra010 = {
        nome: "Portugal",
        categorias: "Paises"
    },
    palavra011 = {
        nome: "Barcelona",
        categorias: "Times"
    },
    palavra012 = {
        nome: "Palmeiras",
        categorias: "Times"
    }, 
    palavra013 = {
        nome: "Real Madrid",
        categorias: "Times"
    },
    palavra014 = {
        nome: "Flamengo",
        categorias: "Times"
    },
    palavra015 = {
        nome: "Liverpool",
        categorias: "Times"
    },
    palavra016 = {
        nome: "Arsenal",
        categorias: "Times"
    },
    palavra017 = {
        nome: "Milan",
        categorias: "Times"
    },
    palavra018 = {
        nome: "Juventus",
        categorias: "Times"
    },
    palavra019 = {
        nome: "Internacional",
        categorias: "Times"
    },
    palavra020 = {
        nome: "Benfica",
        categorias: "Times"
    }, 
    palavra021 = {
        nome: "Titanic",
        categorias: "Filmes"
    },
    palavra022 = {
        nome: "Harry Potter",
        categorias: "Filmes"
    },
    palavra023 = {
        nome: "Rio",
        categorias: "Filmes"
    },
    palavra024 = {
        nome: "Vingadores",
        categorias: "Filmes"
    },
    palavra025 = {
        nome: "Shazam",
        categorias: "Filmes"
    },
    palavra026 = {
        nome: "Divergente",
        categorias: "Filmes"
    },
    palavra027 = {
        nome: "Avatar",
        categorias: "Filmes"
    },
    palavra028 = {
        nome: "Venom",
        categorias: "Filmes"
    },
    palavra029 = {
        nome: "XMen",
        categorias: "Filmes"
    },
    palavra030 = {
        nome: "Mumia",
        categorias: "Filmes"
    }, 
    palavra031 = {
        nome: "Melancia",
        categorias: "Frutas"
    },
    palavra032 = {
        nome: "Tomate",
        categorias: "Frutas"
    },
    palavra033 = {
        nome: "Uva",
        categorias: "Frutas"
    },
    palavra034 = {
        nome: "Morango",
        categorias: "Frutas"
    },
    palavra035 = {
        nome: "Goiaba",
        categorias: "Frutas"
    },
    palavra036 = {
        nome: "Abacaxi",
        categorias: "Frutas"
    },
    palavra037 = {
        nome: "Melão",
        categorias: "Frutas"
    },
    palavra038 = {
        nome: "Abacate",
        categorias: "Frutas"
    },
    palavra039 = {
        nome: "Banana",
        categorias: "Frutas"
    },
    palavra040 = {
        nome: "Jabuticaba",
        categorias: "Frutas"
    }   // o ultimo nao tem virgula
]

function CriaPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categorias;

    console.log(palavraSecretaSorteada);
}

function MontarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavraSecreta");
    palavraTela.innerHTML = "";        

    for (let key = 0; key < palavraSecretaSorteada.length; key++) {
        if(palavraSecretaSorteada[key] == " "){ // verifica se é um espaço em branco
            palavraTela.innerHTML += "<div class='vazio'></div>"; // adicona somente espacamento entre as letras sem mesmo um traçado para poder simular espaços entre palavras
        }else{
            if(listaDinamica[key] == undefined){ // verifica se a letra ja foi preenchida 
                listaDinamica[key] = "&nbsp"; // espaço em branco em HTML
                palavraTela.innerHTML += "<div class='letras'>" + listaDinamica[key] + "</div>"; // adicona um traço vazio
            }else{
                palavraTela.innerHTML += "<div class='letras'>" + listaDinamica[key] + "</div>"; // adicona um traço com a letra
            }  
        }
    }

}

function MudarStyleLetra(tecla) {
    document.getElementById(tecla).style.backgroundColor = "#c71585";
    document.getElementById(tecla).style.color = "#ffffff";
    document.getElementById(tecla).style.transition = "0.7s";
}

function ComparaListas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra);
    if(pos < 0){ // verifica se essa letra existe na palavra
        tentativas--;
        CarregaImagemForca();
        if(tentativas == 0){ // verifica se o usuario perdeu
            AbreModal("ERROUUU!!", "VOCÊ PERDEU ESSA RODADA, A PALAVRA SECRETA ERA <br> <strong>" + palavraSecretaSorteada + "</strong>");
        }
    }else{
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        // verifica se a palavra sorteada é igual a lista que esta aparecendo na tela analisando letra por letra 
        // tambem verifica se a letra verifica não está em branco para evitar erros
        if(palavraSecretaSorteada[i] != listaDinamica[i] && palavraSecretaSorteada[i] != " "){ 
            vitoria = false;
        }
    }

    if(vitoria == true){
        AbreModal("GANHOUUU!!", "PARABÉNS, <strong>VOCÊ VENCEU</strong>");
        tentativas = 0;
    }
}

function VerificarLetraEscolhida(letra) {
    if(tentativas > 0){
        letra = letra.toUpperCase()
        MudarStyleLetra("tecla-" + letra);
        ComparaListas(letra);
        MontarPalavraNaTela();
        document.getElementById("tecla-" + letra).disabled = true;
    }
}

// transforma toda as palavras em maisculo 
// para nao acontecer nenhum erro
function TransformarListaMaisculo(lista, name1, name2) { 
    for (let k = 0; k < lista.length; k++) {
        lista[k][name1] = lista[k][name1].toUpperCase();
        lista[k][name2] = lista[k][name2].toUpperCase();
    }
}

function CarregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.backgroundImage = "url('imagens/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.backgroundImage = "url('imagens/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.backgroundImage = "url('imagens/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.backgroundImage = "url('imagens/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.backgroundImage = "url('imagens/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.backgroundImage = "url('imagens/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.backgroundImage = "url('imagens/forca0.png')";
            break;
    }
}

function AbreModal(titulo, mensagem) { // funcao para mostar uma modal
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo; // mudando o titulo do modal

    let modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

function Resart() {
    location.reload();
}

TransformarListaMaisculo(palavras, 'nome', 'categorias'); // verifique se os valores estao certos com a lista 
CriaPalavraSecreta();
MontarPalavraNaTela();