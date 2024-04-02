gsap.registerPlugin(ScrollTrigger)

/*const lenis = new Lenis({
  duration: 1.5,
    direction: 'both',
    gestureDirection: 'both',
    lerp: 0.075,
    smooth: true,
    smoothTouch: false,
    touchMultiplier:2,
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
let scrollY = 0;

// change me to see what happens. The value must be less than 1.
// too low and I get janky.
// as I get closer to 1, the effect diminishes.
const coefficient = 0.4;

function animate() {

  window.scrollTo({
    top: scrollY,
    left: 0,
  });
  
  requestAnimationFrame(animate);
  
}
animate();

window.addEventListener('scroll', function() {
  
  event.preventDefault();
  
  scrollY += (window.pageYOffset - scrollY) * coefficient;
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
