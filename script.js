
window.onload=function(){
    let loginForm = document.querySelector('.login-form-container');

    document.querySelector('#login').onclick = () =>{
    loginForm.classList.toggle('active');
    }
    document.querySelector('#login1').onclick = () =>{
        loginForm.classList.toggle('active');
        }

    document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
    }

    //cart
    const cart = document.getElementById("cartlist");
    document.getElementById('cart1').onclick=function()
    {
    // console.log(logo);
    cart.style.display = "block";
    }
    
    
    const targetDiv = document.getElementById("menu");
const btn = document.getElementById("list");

btn.onclick = function () {
  
    targetDiv.style.display = "block";
  
};

// const cart = document.getElementById("cartlist");
// const cartbtn = document.getElementById("cart1");

// cartbtn.onclick = function () {
  
//     cart.style.display = "block";
  
// };


    


}
var swiperNext=document.querySelectorAll(".swiper-button-next");
var swiperPrev=document.querySelectorAll(".swiper-button-prev");
// console.log(swiperPrev[3]);
 
var swiper = new Swiper(".bestseller", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: swiperNext[0],
      prevEl: swiperPrev[0],
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
    },
  });
  var swiper = new Swiper(".scifi", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: swiperNext[1],
      prevEl: swiperPrev[1],
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
    },
  });
var swiper = new Swiper(".comics", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
        nextEl: swiperNext[2],
        prevEl: swiperPrev[2],
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
    },
  });
var swiper = new Swiper(".engineering", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
        nextEl: swiperNext[3],
        prevEl: swiperPrev[3],
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
    },
  });
var swiper = new Swiper(".buss", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
        nextEl: swiperNext[4],
        prevEl: swiperPrev[4],
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
    },
  });

