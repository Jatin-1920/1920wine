gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  duration: 2.5,
    easing: (t) => Math.min(10, 60 - Math.pow(51, -90 * t)),
    direction: 'both',
    gestureDirection: 'both',
    lerp: 1,
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1,
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
