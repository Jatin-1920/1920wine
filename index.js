gsap.registerPlugin(ScrollTrigger)


   const lenis = new Lenis({
  duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    lerp: 0.05,
    smooth: 2,
    smoothTouch: false,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    infinite: false,
    autoResize: true,
})
  
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0) 



const prlxSection = document.querySelectorAll(".prlx-section")

prlxSection.forEach(e=>{
  const prlxImg  = e.querySelector(".prlx-item")
  const prlxTl = gsap.timeline({
    scrollTrigger: {
        trigger:e,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      
    }
})
  const yHeight = prlxImg.offsetHeight - e.offsetHeight 

  prlxTl.fromTo(prlxImg,{y:-yHeight},{
    y:0,
    ease:"none"
  })
})


const thrlax = gsap.timeline({
    scrollTrigger: {
        trigger:".trigger",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      
     }
})
       thrlax.to(".thrlax1",{
          y:-155,
          ease:"none"
       }).to(".thrlax2",{
          y:-250,
          ease:"none"
       },0)

let currentScroll = 0
let isScrolling  = true
let tween = gsap.to(".marquee",{xPercent:-100,ease:"linear",repeat:-1,duration:13}).totalProgress(0.5)
window.addEventListener("scroll",() => {
  if (window.pageYOffset > currentScroll) {
    isScrolling = true
  } else{
    isScrolling = false
  }
  gsap.to(tween,{
    timeScale:isScrolling ? 1 : -1
  })
  currentScroll = window.pageYOffset
})

const clipTop = document.querySelectorAll(".clippath")

clipTop.forEach(e=>{
   
const cliplax = gsap.timeline({
    scrollTrigger: {
        trigger:e,
        start: "top 20%",
        end: "bottom bottom",
        scrub: true,
     }
})

     cliplax.to(".clip1",{
        clipPath: polygon(100% 0, 0 0, 0 100%, 100% 100%);,
        ease:"none"
     })
})


