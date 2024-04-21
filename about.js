const races = document.querySelector(".horizontal-scroll")
function getScrollAmount(){
    let racesWidth = races.scrollWidth
    return -(racesWidth-window.innerWidth)

}
const slider = gsap.to(races,{
    x:getScrollAmount,
    duration:5,ease:"none",
  

})

ScrollTrigger.create({
    trigger:".horizontal-container",
    start:"top 20%",
    end:()=> `+=${getScrollAmount()*-1}`,
    pin:true,
    scrub:1,
    invalidateOnRefresh:true,
    animation:slider,
  
})


const thrlaxabout = gsap.timeline({
    scrollTrigger: {
        trigger:".about-trigger",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      
     }
})
       thrlaxabout.to(".thrlax3",{
          y:-155,
          ease:"none"
       }).to(".thrlax4",{
          y:-250,
          ease:"none"
       },0)



