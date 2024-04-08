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

let cartstate = false
const cartToggle = document.querySelector(".cartToggle")
const cartTl = gsap.timeline({paused:true})
cartTl.from(".cart",{width:0, duration:1,ease:"power3.inOut"})
function switchCart() {
  cartstate = !cartstate
  if(cartstate){
    cartTl.play()
  } else{
    cartTl.reverse()
  }
}
cartToggle.addEventListener("click",switchCart)
