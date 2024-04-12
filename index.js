



gsap.registerPlugin(ScrollTrigger);




const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'both',
    gestureDirection: 'both',
    lerp: 0.05,
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





const animTl = gsap.timeline()
animTl.to(".firstanim div",{
   height:0,
   duration:1,
   stagger:0.1,
   ease:"expo.inOut"
}).to(".secondanim div",{
   height:0,
   duration:1,
   stagger:0.1,
   ease:"expo.inOut"
}).to(".introAnim",{
   display:"none",
})


gsap.set(".dialog",{
      yPercent:-200
   })
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



// loading items //
const products= [
    {image:"img/wine4.png",price:100,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine4"},
  {image:"img/wine5.png",price:43,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine5"   },
  {image:"img/wine6.png",price:61,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine6"    },
    {image:"img/wine7.png",price:35,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine7"  },
  {image:"img/wine8.png",price:79,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",  id:"wine8"  },
  {image:"img/wine9.png",price:57,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine9"  },
    {image:"img/wine10.png",price:10,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine10" },
  {image:"img/wine11.png",price:21,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine11" },
  {image:"img/wine12.png",price:19,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine12"   },
    {image:"img/wine13.png",price:32,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine13"  },
  {image:"img/wine14.png",price:48,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine14"  },
  {image:"img/wine15.png",price:8,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine15"  },
    {image:"img/wine16.png",price:38,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine16" },
  {image:"img/wine17.png",price:76,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine17"  },
  {image:"img/wine18.png",price:100,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine18"   },
  {image:"img/wine19.png",price:159,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine19"},
  {image:"img/wine20.png",price:133,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine20"},
  {image:"img/wine21.png",price:170,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine21"},
    {image:"img/wine22.png",price:150,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine22"},
  {image:"img/wine23.png",price:123,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine23"   },
  {image:"img/wine24.png",price:197,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine24"    },
  
]
const products2 = [
    {image:"img/wine25.png",price:125,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine25"  },
  {image:"img/wine26.png",price:169,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",  id:"wine26"  },
  {image:"img/wine27.png",price:87,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine27"  },
    {image:"img/wine28.png",price:101,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine28" },
      {image:"img/wine29.png",price:198,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine29" },
  {image:"img/wine30.png",price:118,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine30"  },
  {image:"img/wine31.png",price:127,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine31"   },
  {image:"img/wine32.png",price:88,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine32"},
  {image:"img/wine33.png",price:71,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine33"},
  {image:"img/wine34.png",price:251,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine34"},
    {image:"img/wine35.png",price:209,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine35"},
  {image:"img/wine36.png",price:157,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine36"   },
  {image:"img/wine37.png",price:139,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",id:"wine37"    },
    {image:"img/wine38.png",price:205,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine38"  },
  {image:"img/wine39.png",price:109,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",  id:"wine39"  },
  {image:"img/wine40.png",price:117,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine40"  },
    {image:"img/wine41.png",price:211,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine41" },
  {image:"img/wine42.png",price:190,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine42"  },
  {image:"img/wine43.png",price:287,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!",  id:"wine43"  },
  {image:"img/wine44.png",price:130,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine44"  },
    {image:"img/wine45.png",price:91,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!", id:"wine45" },
  
]


  const productList = document.querySelector(".productList")
  const productList2 = document.querySelector(".productList2")

const html = products.map(item=>
  `
  <div class="productItem" id=${item.id}>
  <img src=${item.image}/>
  <p class="price">$ ${item.price}</p>
  <button type="button" class="addbutton">Add Me</button>
  </div>
  `
).join('')
const html2 = products2.map(item=>
  `
  <div class="productItem"  id=${item.id}>
  <img src=${item.image}/>
  <p class="price">$ ${item.price}</p>
  <button type="button" class="addbutton">Add Me</button>
  </div>
  `
).join('')


productList.innerHTML = html
productList2.innerHTML = html2



// Add To Cart //

   
let essenceItem= []
const store =  document.querySelector('.cartItem')
const addToCart =  document.querySelectorAll('.addbutton')
const sumPrice = document.querySelector('.cartTotal')
const itemid = document.querySelector('.itemid')
const cartLength = document.querySelector('.cartLength')
function countSumPrice(){
    let  sumPrice = 0
    essenceItem.forEach(item=>{
       sumPrice += item.price
    })
    return sumPrice
}


function updating(item) {
    for(let i =0; i < essenceItem.length;i++){
       if(essenceItem[i].class ===item.class) {
          essenceItem[i].count += 1
         essenceItem.price = essenceItem.count * essenceItem.countPrice
          return
       }
       
    }
   essenceItem.push(item)
}


function addToCartItem(e) {
const current = e.currentTarget.parentElement
   const oldprice = current.children[1].innerText
   const strprice = oldprice.match(/(\d+)/)
   const price = parseFloat(strprice[0])
   const image = current.children[0]
   const img = image.src
   const classes = current.id
let item = {
price,
    img,
 id : Date.now(),
    count:1,
    countPrice : price,
   class:classes,
}

updating(item)
   itemid.innerHTML = `
   <div class="itemD">
   
   <p>${classes}</p>
   <img src=${img}/>
   <p>$ ${price}</p>
   </div>`
store.dispatchEvent(new CustomEvent("itemsUpdated"))
   gsap.to(".dialog",{
    yPercent:0,
    ease:"power3.inOut",
    duration:1,
 }) 
   
   setTimeout(()=>{
      gsap.to(".dialog",{
    yPercent:-200,
    ease:"power3.inOut",
    duration:1
 })  
   },2000)
}


function displayItem(){
    
const html =  essenceItem.map(x=> 
`
          <div class="Cart-col" id=${x.id}>
          <img src=${x.img}>
          <div class="cartPriceCol">
              <span class="cartPrice">$ ${x.price}</span>
              <span id="deleteCart" ><i class="fa fa-trash" id=${x.id}></i></span>
          </div>
          <div class="cart-count-col">
          <button class="minus" onclick="decrement(${x.id})">-</button>
          <span class="counted">${x.count}</span>
          <button class="plus" onclick="increment(${x.id})">+</button>
          </div>
          </div>
  
      `
).join('')
   
store.innerHTML = html
   cartLength.innerHTML = essenceItem.length
  sumPrice.innerHTML = "$ &nbsp" +countSumPrice()
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


addToCart.forEach(btn=>btn.addEventListener('click',addToCartItem))
store.addEventListener("itemsUpdated",displayItem)
store.addEventListener("itemsUpdated",eventLocalStorage)
store.addEventListener("click",(e)=>{
    const id = parseInt(e.target.id)
    if(e.target.matches("i")){
        deleteItems(id)
    }
    
})


getLocale()    

   
