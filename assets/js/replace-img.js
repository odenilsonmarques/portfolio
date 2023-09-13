// Função para substituir a imagem quando a largura da tela for menor ou igual a 575px
function substituirImagem() {
    const larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (larguraTela <= 575) {
        document.getElementById("imagemSlide").src = "assets/img/financeiro2.png";

        document.getElementById("imagemSlide1").src = "assets/img/loja2.jpeg";

        document.getElementById("imagemSlide2").src = "assets/img/tgc2.jpeg";
    } 
    // else {
    //     document.getElementById("imagemSlide").src = "assets/img/financeiro1.jpeg";

    //     document.getElementById("imagemSlide").src = "assets/img/loja1.jpeg";

    //     document.getElementById("imagemSlide").src = "assets/img/tgc1.jpeg";
    // }
}

// Chame a função quando a página for carregada e redimensionada
window.addEventListener("load", substituirImagem);
window.addEventListener("resize", substituirImagem);