// window.jQuery = $; window.$ = $; 

import Swiper from 'swiper';

var topSwiper = new Swiper('.header__list-wrapper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: '144',
  },
  mousewheel: true,
  grabCursor: true,

  breakpoints: {
    // when window width is <= 360px
    360: {
      slidesPerView: 1,
      spaceBetween: 44,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }

});

var bottomSwiper = new Swiper('.slider-bottom', {
  slidesPerView: 1,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is <= 360px
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }


});


// var mainSlider = new Swiper('.main-slider__slider', {
//     loop: false,
//     grabCursor: true,
//     direction: 'vertical', 
//     pagination: {
//       el: '.main-slider__pagination',
//       clickable: true
//     },
//   }); 

//   var serviceSlider = new Swiper('.block-1__slider-body', {
//     loop: true,
//     grabCursor: true,
//     autoplay: true 
//   }); 

  
//   var productSlider = new Swiper('.product-slider__body', {
//     loop: true,
//     slidesPerView: 3,
//     spaceBetween: 71,
//     grabCursor: true,
//     autoplay: true,
//     navigation: {
//       nextEl: '.product-slider__arrow-next', 
//       prevEl: '.product-slider__arrow-prev', 
//     }, 
//   }); 
  

// var instagramSlider = new Swiper('.instagram__slider', {  
//   slidesPerView: 3,
//   initialSlide: '0',
//   navigation: {
//     nextEl: '.swiper-button-next', 
//     prevEl: '.swiper-button-prev', 
//   },
//   spaceBetween: 30,
//   breakpoints: {
//     1023: {
//       slidesPerView: 2
//     },
//     640: {
//       slidesPerView: 1
//     }
//   }
// });


// var PPS = function(){
//   $('.swiper-container[pp-tabs="1"]').css("display","block");

//   var popularProductsSlider = new Swiper('.swiper-container[pp-tabs="1"]', {  
//     slidesPerView: 4,
//     spaceBetween: 30,
//     navigation: {
//       nextEl: '.swiper-button-next', 
//       prevEl: '.swiper-button-prev', 
//     },
//     breakpoints: {
//       1210: {
//         slidesPerView: 3
//       },
//       1023: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       460: {
//         slidesPerView: 1,
//       }
//     },
//   });

//   window.onload = function(){
//     var height = $('.popular-products__slider-wrapper').css("height");
//     $('.popular-products__slider-wrapper').css("height" , height);
//   }
// }



// var popularProductsTabs = function (){
//   $('[data="pp-tabs"]').each(function(){
//     var tabTitle = $(this);
//     var tabContent = $(this).attr('pp-tabs');
//     $(this).click(function(){
//       $('.popular-products__menu-item').removeClass('popular-products__menu-item_active');
//       $(tabTitle).addClass('popular-products__menu-item_active');
//       $('.popular-products__slider').fadeOut();
//       $('.swiper-container[pp-tabs="' + tabContent + '"]').fadeIn();
//       setTimeout(function(){
//         var popularProductsSlider2 = new Swiper('.swiper-container[pp-tabs="' + tabContent + '"]', {  
//           slidesPerView: 4,
//           spaceBetween: 30,
//           navigation: {
//             nextEl: '.swiper-button-next', 
//             prevEl: '.swiper-button-prev', 
//           }, 
//           breakpoints: {
//             1210: {
//               slidesPerView: 3
//             },
//             1023: { 
//               slidesPerView: 2,
//               spaceBetween: 30,  
//             }, 
//             460: {
//               slidesPerView: 1,
//             }  
//           },
//         });  
//       }, 10)
//     })
//   })
// }

// var ProductPageSlider = new Swiper ( ".product-page__slider", {
//   slidesPerView: 2,
//   slideToClickedSlide: true,
//   grabCursor: true,
//   loop: true,
//   on: {
//     init: function () {
//       $(".product-page__slide-img").css("opacity", "1") 
//     }
//   }
// })

// var ReviewsSlider = new Swiper ( ".reviews__slider", {
//   slidesPerView: 1,
//   loop: true,
//   autoplay: true
// })


// var lookbooksSlider = new Swiper ( ".lookbooks__slider", {
//   slidesPerView: 'auto',
//   loop: true,
//   centeredSlides: true,
//   autoplay: true,
//   slidesPerView: 'auto',
//   slideToClickedSlide: true
// })


// var PPSInit = function(){
//     PPS();
//     popularProductsTabs();
// }



// PPSInit();