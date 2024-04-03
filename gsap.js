

gsap.registerPlugin(ScrollTrigger)

const navToggle = document.querySelector(".menuToggle")

const navTl = gsap.timeline({paused:true})

navTl.to(".nav",{height:"100dvh",ease:"power2.inOut",
                 duration:.85}).from(".topNavLine",{scaleY:0,transformOrigin:"0% 0%" ,duration:1,
              ease:"power2.inOut"},0.2).from(".bottomNavLine",{scaleX:0,transformOrigin:"0% 0%" ,duration:1,
            ease:"power2.inOut"},0.2).from(".nav-link",{opacity:0,y:-50,duration:.7,stagger:.1,
            ease:"power2.inOut",},0.2).from(".bottomLink i",{
  opacity:0,y:-50,duration:.7,stagger:.1,ease:"power2.inOut"
            },0.2)

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
