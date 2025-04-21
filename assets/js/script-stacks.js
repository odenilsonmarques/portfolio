const swiper = new Swiper('.tech-swiper', {
    slidesPerView: 4,        // 4 logos por vez
    spaceBetween: 30,        // espaço entre eles
    loop: true,              // para voltar no começo quando chegar ao fim
    autoplay: {
        delay: 0,              // sem delay
        disableOnInteraction: false,
    },
    speed: 4000,             // velocidade para deixar deslizando bem devagar
    grabCursor: true,        // cursor de mãozinha
    breakpoints: {           // responsividade
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
    },
});
