document.querySelector('#q').value = '';
document.querySelector('#form-busca').onsubmit = function () {
    if (document.querySelector('#q').value == '') {
        document.querySelector('#q').style.background = '#FF0000';
        return false;
    }
};

document.querySelector('#q').onfocus = function () {

    document.querySelector('#q').style.background = 'white';

}

var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual+1) % 2;
    document.querySelector('#banners').src=banners[bannerAtual];
}

var troca = setInterval(trocaBanner, 3000);


document.querySelector('#btn-pause').onclick = function() {
    clearInterval(troca);
}
document.querySelector('#btn-play').onclick = function() {
    troca = setInterval(trocaBanner, 3000);
}