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


const aboutPrlxTl = gsap.timeline({
    trigger:".h-scroll3",
    start:"left right",
    end:"right left",
    containerAnimation:slider,
    id:"id",
    scrub: true 
})
aboutPrlxTl.to(".h-scroll3",{
    backgroundPosition:"0% 50%",
    ease:"none"
}).to(".h-img3",{
    xPercent:-25,
    ease:"none"
},0)
