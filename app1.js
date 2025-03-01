const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})

var a = document.querySelector("#elem-container")
var b = document.querySelector("#fixed-image")
a.addEventListener("mouseenter",function(){
    b.style.display="block"
})
a.addEventListener("mouseleave",function(){
    b.style.display="none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        b.style.backgroundImage = `url(${image})`
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    
  });

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var flag  = 0 
menu.addEventListener("click",function(){
    if (flag == 0) {
        full.style.top="0";
        navimg.style.opacity= 0
        flag = 1
    }else{
        full.style.top="-100%";
        navimg.style.opacity= 1
        flag = 0
    }
})

var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%" 
},3000)