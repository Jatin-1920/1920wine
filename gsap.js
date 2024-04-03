

gsap.registerPlugin(ScrollTrigger)

const navToggle = document.querySelector(".menuToggle")

const navTl = gsap.timeline({paused:true})

navTl.to(".nav",{height:"100dvh",ease:"power2.inOut",
                 duration:.85}).from(".topNavLine",{scale:0,transformOrigin:"0% 0%" ,duration:.75,ease:"power2.inOut"},.5)
let state = false

function switchMenu() {
  state = !state
  if(state){
    navTl.play()
  } else{
    navTl.reverse()
  }
}

navToggle.addEventListener("click",switchMenu)
