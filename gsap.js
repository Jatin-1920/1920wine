

gsap.registerPlugin(ScrollTrigger)

const navToggle = document.querySelector(".menuToggle")

const navTl = gsap.timeline({paused:true})

navTl.to(".nav",{height:"100dvh",ease:"power2.inOut",
                 duration:.85}).from(".topNavLine",{scaleY:0,transformOrigin:"0% 0%" ,duration:1,
              ease:"power2.inOut"},0.2).from(".bottomNavLine",{scaleX:0,transformOrigin:"0% 0%" ,duration:1,
            ease:"power2.inOut"},0.2).to(".nav-link",{opacity:1,duration:.7,stagger:.2,
            ease:"power2.inOut"},0.56).from(".bottomLink i",{
  opacity:0,y:-50,duration:.7,stagger:.1,ease:"power2.inOut"
            },0.4)

let state = false

function switchMenu() {
  state = !state
  if(state){
    navTl.play()
  } else{
    navTl.reverse()
  }
}

navToggle.addEventListener("click",switchMenu)


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
  <button type="button">Add Me</button>
  </div>
  `
).join('')
const html2 = products2.map(item=>
  `
  <div class="productItem" id=${item.id}>
  <img src=${item.image}/>
  <p class="price">$ ${item.price}</p>
  <button type="addbutton">Add Me</button>
  </div>
  `
).join('')
  
productList.innerHTML = html
productList2.innerHTML = html2
