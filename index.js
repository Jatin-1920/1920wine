gsap.registerPlugin(ScrollTrigger)


 /*   const lenis = new Lenis({
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

gsap.ticker.lagSmoothing(0) */
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".root"),
  smooth: true,
 lerp:0.05
  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".root", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

   ,pinType: document.querySelector(".root").style.transform ? "transform": "fixed"
});

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


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
  
