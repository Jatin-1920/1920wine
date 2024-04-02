gsap.registerPlugin(ScrollTrigger)

/*const lenis = new Lenis({
  duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'both',
    gestureDirection: 'both',
    lerp: 1,
    smooth: 2,
    smoothTouch: false,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    infinite: false,
    autoResize: true,
});

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
*/
const section = document.querySelector('.root');
let currentPosition = 0;
let targetPosition = 0;

function lerp(min, max, ease) {
  return min * (1 - ease) + max * ease;
}

function smoothScroll() {
  currentPosition = lerp(currentPosition, window.scrollY, 0.1);
  currentPosition = parseFloat(currentPosition.toFixed(2));
  targetPosition = window.scrollY;
  section.style.transform = `translate3d(0, ${-currentPosition}px, 0)`;
  window.requestAnimationFrame(smoothScroll);
}

function setup() {
  const sectionHeight = section.scrollHeight;
  document.body.style.height = `${sectionHeight}px`;
  smoothScroll();
}

window.addEventListener('resize', () => {
  const sectionHeight = section.scrollHeight;
  document.body.style.height = `${sectionHeight}px`;
})

setup();
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
