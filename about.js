const races = document.querySelector(".horizontal-scroll")
function getScrollAmount(){
    let racesWidth = races.clientWidth
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
