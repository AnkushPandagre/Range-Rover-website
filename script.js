 
//  swipper js
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  


  function show(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync po  sitioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

 
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

  }
  show();

//  page1 box
var service = document.querySelector(".service")
var chart   = document.querySelector(".chart")

var flag = 0;

service.addEventListener("click",function(){
    if(flag===0){
      chart.style.display = "initial"
      // chart.style.width = "20%"
      flag = 1
    }else{
           chart.style.display = "none"
          flag = 0
    }
})
 
// search 
var menu = document.querySelector(".search")
var scr = document.querySelector(".upper")
var cross = document.querySelector(".close")


menu.addEventListener("click",function(){
    scr.style.top=0
})

cross.addEventListener("click",function(){
    scr.style.top = "-100%"
})



var min = document.querySelector(".location")
var car = document.querySelector(".loc")
var arrow = document.querySelector(".cross")
// var mai = document.querySelector(".main")


min.addEventListener("click",function(){
    car.style.display = "initial"
    // mai.style.display = "none"

})

arrow.addEventListener("click",function(){
  car.style.display = "none"

})

