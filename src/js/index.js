$('.container-slider').slick({
    dots: true,
    arrows:false,
    speed:5000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover:false,
    responsive: [{
                  breakpoint: 771,
                  settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }],
    });

var menuBtn = document.querySelector(`.itens-menu-mobile i`);
menuBtn.addEventListener(`click`, ()=>{
    let itensMenu = document.querySelector('.menu-mobile');
    if(itensMenu.classList.contains('show')){
        itensMenu.classList.remove('show');
        itensMenu.classList.add('hide');
    }else{
        itensMenu.classList.remove('hide');
        itensMenu.classList.add('show');
    }
})
