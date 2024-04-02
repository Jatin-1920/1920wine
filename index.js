gsap.registerPlugin(ScrollTrigger)

const locoScroll = new LocomotiveScroll({
el: document.querySelector(‘[data-scroll-container]’),
smooth: true,
smartphone: { smooth: true },
tablet: { smooth: true },
lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
multiplier: 1.2, // Effect Multiplier
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
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
