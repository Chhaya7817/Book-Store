
var remTime;

window.onload=function(){

    //countdown
    var countDownDate = new Date("Nov 28, 2022 22:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Sale Ended";
  }
}, 1000);


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
 
    
    const targetDiv = document.getElementById("menu");
const btn = document.getElementById("list");

btn.onclick = function () {
  
    targetDiv.style.display = "block";

  
};  


}

function startCountdown()
{

    count=setInterval(function(){
        remTime-=1;
        document.getElementById("timeRemaining").innerHTML=remTime;
        if(remTime==0)
        {
            
           
            stopCountdown();
            
        }
    },1000);
}

function stopCountdown(){
    clearInterval(count);
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

