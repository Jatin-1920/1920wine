

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
  {image:"img/wine1.jpg",price:28,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine2.jpg",price:98,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine3.jpg",price:80,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
    {image:"img/wine4.jpg",price:100,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine5.jpg",price:43,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine6.jpg",price:61,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
    {image:"img/wine7.jpg",price:35,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine8.jpg",price:79,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine9.jpg",price:57,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
    {image:"img/wine10.jpg",price:10,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine11.jpg",price:21,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine12.jpg",price:19,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
    {image:"img/wine13.jpg",price:32,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine14.jpg",price:48,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine15.jpg",price:8,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
    {image:"img/wine16.jpg",price:38,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine17.jpg",price:14,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
  {image:"img/wine18.jpg",price:56,desc:"A semi-dry red wine with soft character and light and fruity aromas is broadly appealing and reveals the uniqueness of the Missouri St. Vincent grape.  Save 20% when you purchase $200 or more!"},
]
