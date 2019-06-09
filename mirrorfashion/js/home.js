document.querySelector('#q').value = '';
document.querySelector('#form-busca').onsubmit = function () {
    if (document.querySelector('#q').value == '') {
        document.querySelector('#q').style.background = 'rgba(255, 0, 0, 0.7)';
        return false;
    }
};

document.querySelector('#q').onfocus = function () {

    document.querySelector('#q').style.background = 'white';

}
// array que guarda as imagens para o banner
var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0; // banner começa no indice 0 que é a primeira imagem a exibir
// funcão para troca de banner
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2; // o resto da divisão por 2 sempre resulta em 1 ou 0 com valores inteiros
    document.querySelector('#banners').src = banners[bannerAtual];
}

// set interval para trocar os banners a cada 3s
var timer = setInterval(trocaBanner, 3000);
// variavel de controle para os botoes de pause e play com query selector
var controle = document.querySelector('.pause');
controle.addEventListener('click', function () {
    if (controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocaBanner, 3000);
        controle.className = 'pause';
    }
    return false;
});