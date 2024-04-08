gsap.registerPlugin(ScrollTrigger)


   const lenis = new Lenis({
  duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'both',
    gestureDirection: 'both',
    lerp: 0.05,
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    infinite: false,
    autoResize: true,
      smoothWheel: true 
})
  
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


const thrlax = gsap.timeline({
    scrollTrigger: {
        trigger:".trigger",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      
     }
})
       thrlax.to(".thrlax1",{
          y:-155,
          ease:"none"
       }).to(".thrlax2",{
          y:-250,
          ease:"none"
       },0)

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

const clipTop = document.querySelectorAll(".clippath")

clipTop.forEach(e=>{
   
const cliplax = gsap.timeline({
    scrollTrigger: {
        trigger:e,
        start: "top bottom",
        end: "bottom top",
       scrub:true
     }
})
const clip1 = e.querySelector(".clip1")
const clip2 = document.querySelector(".clip2")

   
     cliplax.to(clip1,{
   ease:"none",
        y:-65
     }).to(clip2,{
   ease:"none",
        y:-100
     },0)
})




// Add To Cart //

   
/*let essenceItem= []*/
const store =  document.querySelector('.cartItem')

const addToCart =  document.querySelectorAll('.addbutton')


const sumPrice = document.querySelector('.cartTotal')


/*function countSumPrice(){
    let  sumPrice = 0
    essenceItem.forEach(item=>{
       sumPrice += item.price
    })
    return sumPrice
}


function updateCartItem(item) {
    for(let i = 0; i < essenceItem.length; i++){
        if(essenceItem[i].class=== item.class){
essenceItem[i].count += 1
essenceItem[i].price = essenceItem[i].countPrice * essenceItem[i].count
return
        }
 
    }
   
    essenceItem.push(item)
   
}


function updating(item) {
  let selectedItem = essenceItem.find(x=>x.class===item.class)
   if(selectedItem) {
      essenceItem.count += 1
      essenceItem.price = essenceItem.count * essenceItem.countPrice
   } else {
      essenceItem.push(item)
   }
   
}
*/
function addToCartItem(e) {
const current = e.currentTarget
/*let item = {
price,
    img,
 id : Date.now(),
    count:1,
    countPrice : price,
}*/


   console.log(current)
store.dispatchEvent(new CustomEvent("itemsUpdated"))
}


/*function displayItem(){
    
const html =  essenceItem.map(x=> 
`
          <div class="Cart-col" id=${x.id}>
          <img src=${x.img}>
          <div class="cart-Price">
              <span class="cart-Title ">${x.name}</span>
              <span class="cartPrice">$ ${x.price}</span>
              <span id="button" ><i class="fa fa-trash" id=${x.id} ></i></span>
          </div>
          <div class="cart-col-flex">
          <button class="minus" onclick="decrement(${x.id})">-</button>
          <span class="counted">${x.count}</span>
          <button class="plus" onclick="increment(${x.id})">+</button>
          </div>
          </div>
  
      `
).join('')
store.innerHTML = html
  
  }
  


function eventLocalStorage(){
    localStorage.setItem('essenceItem',JSON.stringify(essenceItem))
}

function getLocale(){
   const restore =  JSON.parse(localStorage.getItem('essenceItem'))
   if(restore.length){
    essenceItem = restore
    store.dispatchEvent(new CustomEvent("itemsUpdated"));
   }
}

function deleteItems(id){
    console.log('Delete items')
    essenceItem = essenceItem.filter((item)=>item.id !==id)
    store.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function increment(id) {
    let selectedItem  =id
    let search = essenceItem.find(x=>x.id===selectedItem)
    if(search)
    {
        search.count +=1
    }
    console.log(search)
    store.dispatchEvent(new CustomEvent("itemsUpdated"));
    calculation(id)
    deleted(id)
    }
    function decrement(id) {
        let selectedItem  =id
    let search = essenceItem.find(x=>x.id===selectedItem)
    if(search.count===0) {
      deleteItems(id)
    }
    else{
        search.count -=1
    }
    store.dispatchEvent(new CustomEvent("itemsUpdated"));
    console.log(search)
    calculation(id)
    deleted(id)
    }
    
    function calculation(id) {
        let search = essenceItem.find(x=>x.id===id)
        search.price = search.count*search.countPrice
        store.dispatchEvent(new CustomEvent("itemsUpdated"));
    }

function deleted(id) {
const selectedItem = id
const search = essenceItem.find(x=>x.id===selectedItem)
if(search.count === 0) {
    essenceItem = essenceItem.filter(item=>item.id!==id)
}
store.dispatchEvent(new CustomEvent("itemsUpdated"));
}
*/

addToCart.forEach(btn=>btn.addEventListener('click',addToCartItem))
/*store.addEventListener("itemsUpdated",displayItem)
store.addEventListener("itemsUpdated",eventLocalStorage)
store.addEventListener("click",(e)=>{
    const id = parseInt(e.target.id)
    if(e.target.matches("i")){
        deleteItems(id)
    }
    
})


getLocale()    
*/
   
