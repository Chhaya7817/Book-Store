
window.onload=function(){
    document.getElementById('cart').onclick=function()
    {
    // console.log(logo);
    window.location.href="./cart.html";
    }
    let loginForm = document.querySelector('.login-form-container');

    document.querySelector('#login').onclick = () =>{
    loginForm.classList.toggle('active');
    }

    document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
    }
    

    //Product details 
    // var Pdetails=document.querySelector('.Pdetails')
    // const Bname=document.getElementsByClassName("name");
    // for(let i=0;i<Bname.length;i++)
    // {
    // // console.log(Bname[i]);
    // Bname[i].onclick=function(){
    //     // window.location.href="./productDetails.html";
    //     // getElementsByClassName('name')[0];
    //     Bname[i].onclick=function(){
    //         loginForm.classList.toggle('active');
    //         document.querySelector('.Pname').innerHTML= console.log(document.getElementsByClassName('books')[0].getElementsByClassName('name')[0]);
    //         Pdetails.classList.remove('active');
    //     }
        
        
    // }

    // console.log(document.getElementsByClassName('books')[0].getElementsByClassName('name')[0]);
    // }


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

