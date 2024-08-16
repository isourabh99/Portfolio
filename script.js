//TODO ADD these in file in index.html
//TODO <link rel="stylesheet" href="./locomotive.css">
//TODO <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"></script>;

const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

function firstpageAnim() {
  var tl = gsap.timeline();
  tl.from("nav", {
    y: "-10",
    opacity: 0,
    duration: 1.2,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      duration: 2,
      delay: -1,
      ease: Expo.easeInOut,
      stagger: 0.2,
    })
    .from(".heroFooter", {
      y: -10,
      duration: 2,
      delay: -1,
      opacity: 0,
      ease: Expo.easeInOut,
    });
}

function circleMouseFollower() {
  window.addEventListener("mousemove", (dets) => {
    // console.log(dets.clientX,dets.clientY);
    document.querySelector(
      "#circleMouseFollower"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

document.querySelectorAll(".elem").forEach((elem) => {
  elem.addEventListener("mousemove", (dets) => {
  let difference=  dets.clientY - elem.getBoundingClientRect().top
    
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power4,
      top: difference,
      left: dets.clientX,
    });
  });
});
document.querySelectorAll(".elem").forEach((elem) => {
  elem.addEventListener("mouseleave", (dets) => {
    
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power4,
  
    });
  });
});

circleMouseFollower();
firstpageAnim();




// TODO slideNav
var tl =gsap.timeline()
let slideNav=document.querySelector(".slideNav")
let slideNavAnchors=document.querySelectorAll(".slideNav a")
let menu=document.querySelector(".menu")
let cross=document.querySelector(".close")

tl.to(slideNav,{
  right:0,
  duration:.5,
})
tl.from( slideNavAnchors,{
  y:-100,
  stagger:.2,
  opacity:0,
})
tl.from(".slideNav .close", {
  opacity: 0,
});

tl.pause()

menu.addEventListener("click",()=>{
  console.log("clicked");

  tl.play()
})

cross.addEventListener("click",()=>{
  console.log("clicked");

  tl.reverse()
})


// TODO elastic string
let path = "M 10 50 Q 350 50 690 50";
let initialPath = "M 10 50 Q 350 50 690 50";

let svgContainer = document.querySelector(".svgContainer");
svgContainer.addEventListener("mousemove",(dets)=>{
  path = `M 10 50 Q 350 ${dets.y-450} 690 50`;
  
  gsap.to("svg path",{
    attr:{d:path},
    duration:.2,
    ease:"power3.out"
  })
})
svgContainer.addEventListener("mouseleave",(dets)=>{
gsap.to("svg path",{
  attr:{d:initialPath},
  duration:.5,
  ease:"elastic.out(1,.1)"
})
})