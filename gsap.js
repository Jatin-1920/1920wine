

gsap.registerPlugin(ScrollTrigger)

const navToggle = document.querySelector(".menuToggle")

const navTl = gsap.timeline({paused:true})

navTl.from(".nav",{height:"0",ease:"power2.inOut",
                 duration:.85}).from(".topNavLine",{height:"0%", duration:.75,ease:"power2.inOut"},.5)
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
