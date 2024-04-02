gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  duration: 1.2,
    direction: 'both',
    gestureDirection: 'both',
    lerp: 0.05,
    smooth: 2,
    smoothTouch: false,
    touchMultiplier:3,
    wheelMultiplier: 2,
    infinite: false,
    autoResize: true,
});

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
