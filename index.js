gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  duration: 1.5,
    direction: 'both',
    gestureDirection: 'both',
    lerp: 1,
    smooth: true,
    smoothTouch: false,
    touchMultiplier:5,
    wheelMultiplier: 6,
    infinite: false,
    autoResize: true,
});

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

let targetY = 0
let currentY = 0
const main = document.querySelector(".root")

function setup() {
  const scrollh = main.offsetHeight
  document.body.style.height = `${scrollh}px`
}

function lerp (start, end, t) {
  return start * (1 - t) + end * t;
}
window.addEventListener("scroll",()=>{
  targetY = window.scrollY
})
function smoothScroll() {
  currentY = lerp(currentY,targetY,0.075)
  main.style.transform = `translate3d(0,${-currentY}px,0)`
  requestAnimationFrame(smoothScroll)
}
setup()
smoothScroll()
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
