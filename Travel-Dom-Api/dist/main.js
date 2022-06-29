/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Article": () => (/* binding */ Article)
/* harmony export */ });
class Article {
    constructor({ id, img, place, price, days }) {
        this.id = id,
            this.img = img,
            this.place = place,
            this.price = price,
            this.days = days

    }

    generateArticle() {
        let template = ""
        let article = document.createElement("div")
        article.className = "destination__trip"
        article.setAttribute("data-id", this.id);
        this.img && (template += `<img class="destination__main-img" src=${this.img} alt="destination">`);
        if (this.place || this.price) {
            template += `<div class="trip__description">
    <p>${this.place}</p>
    <p>${this.price}</p>
</div>`
        }
        this.days && (template += `<div class="trip__duration">
   <img src="#" alt="">
   <span class="trip-days"> ${this.days}</span> <span>Days Trip</span>
</div>`)


        article.innerHTML = template

        return article
    }
}





/***/ }),

/***/ "./src/js/Auth.js":
/*!************************!*\
  !*** ./src/js/Auth.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Auth": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");



class Auth extends _modal__WEBPACK_IMPORTED_MODULE_0__.Modal{

    constructor(type){

         super(type)
     
        this.type=type
       
    } 
    renderModal(){
        const container=document.createElement("div")
        container.classList.add("auth-modal")
let template=`
<h3>${this.type}</h3>
<div class="auth__item">${this.type} <input/></div>`
template+=`<div class="auth__item">Password <input/></div>`
this.type=="Register"&&(template+=`<div class="auth__item">Password-repeat <input/></div>`
)
container.innerHTML=template
        this.buildModal(container)
    }
}

/***/ }),

/***/ "./src/js/ChoseHandler.js":
/*!********************************!*\
  !*** ./src/js/ChoseHandler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "choseHandler": () => (/* binding */ choseHandler)
/* harmony export */ });
const choseHandler = (className, wantCapture) => {
    const linkContainer = document.querySelector(className)

    linkContainer.addEventListener("click", (e) => whichClicked(e, wantCapture))
}


const whichClicked = (e, wantCapture) => {
    const current = e.target
    const parrent = e.target.parentNode
    if (current.classList.contains(wantCapture)) {
       const e= parrent.querySelectorAll("span")
    e.forEach(element => {
        console.log(element.classList.remove("navigation__link-active"));
    });
        
        const span = document.createElement("span")
        span.classList.add("navigation__link-active")
        current.append(span)
    }


}

/***/ }),

/***/ "./src/js/Sidebar.js":
/*!***************************!*\
  !*** ./src/js/Sidebar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar)
/* harmony export */ });



class Sidebar {
    constructor(buttonHamburger) {
        this.buttonSidebar = buttonHamburger

    }
    geterateSidebar() {
        const sidebar = document.querySelector(".sidebar")

        const removeSidebar = () => {
            sidebar.remove()
        }




  this.autoClose()
        if (sidebar) {
          
            removeSidebar()
            return
        }

        if (!sidebar) {
 
            const sidebar = document.createElement("div")
            sidebar.classList.add("sidebar")
            let template = `
   <nav class="sidebar__navigation">
   <ul  class="navigation ">
       <li class="navigation__link"> Destinations <span class="navigation__link-active"></span></li>
       <li class="navigation__link"> Hotels</li>
       <li class="navigation__link">Flights</li>
       <li class="navigation__link"> Booking</li>

   </ul>
   </nav>`
            sidebar.innerHTML = template
            document.body.prepend(sidebar)

        }

    }

    autoClose() {
        const sizeHandler = () => {
           
            let width = window.innerWidth
            if (width > 761) {
             
                const sidebar = document.querySelector(".sidebar")
                this.buttonSidebar.classList.remove("hamburger__active")
                if (sidebar) {
                    sidebar.remove()
                    window.removeEventListener('resize', sizeHandler);
                }



            }
        }

        window.addEventListener('resize', sizeHandler);

    


    }
}

/***/ }),

/***/ "./src/js/Slider.js":
/*!**************************!*\
  !*** ./src/js/Slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
    constructor({ left, right }) {
        this.left = left
        this.left.addEventListener("click", () => this.moveSlider("left"))
        this.right = right
        this.right.addEventListener("click", () => this.moveSlider("right"))
        this.slider = document.querySelector(".slider__container")


    }
    moveSlider(direction) {

        if (direction === "left") {
            this.slider.classList.add("move-left")
            this.animationed("left")
          setTimeout(()=>{this.changeSelected("left")},2000)  
        }
        if (direction === "right") {
            this.slider.classList.add("move-right")
            this.animationed("right")
            setTimeout(()=>{this.changeSelected("right")},2000) 
        }


    }


    animationed(direction) {

        this.slider.addEventListener('animationend', () => {
            afterAnomation()
            this.slider.removeEventListener('animationend', () => {
                afterAnomation()

            })
        })


        const afterAnomation = () => {
           

            this.slider.classList.remove("move-left")
            this.slider.classList.remove("move-right")
           

        }
    }

    changeSelected(dirrection) {
        const left = document.querySelector("#carouselLeft")
        const middle = document.querySelector("#carouselMiddle")
        const right = document.querySelector("#carouselRight")
        if (dirrection === "left") {
     
            let middleElement=middle.innerHTML 
            let rightElement=right.innerHTML
            let leftEllement=left.innerHTML
console.log(rightElement);
            middle.innerHTML=rightElement
            right.innerHTML=leftEllement
            left.innerHTML=middleElement
            return
        }
        if (dirrection === "right") {
            let middleElement=middle.innerHTML 
            let rightElement=right.innerHTML
            let leftEllement=left.innerHTML
            middle.innerHTML = leftEllement
            right.innerHTML=middleElement
            left.innerHTML=rightElement

        }

    }
}

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "destinations": () => (/* binding */ destinations)
/* harmony export */ });
const destinations=[
{
    id:"1",
  img:"./img/destinations/1.png",
  place:"Rome,Italy",
  price:"5.42k",
  days:"1-3"
},
{
    id:"2",
    img:"./img/destinations/2.png",
    place:"Rome,Italy",
    price:"4.5k",
    days:"3-5"
  },
  {
    id:"3",
    img:"./img/destinations/3.png",
    place:"Full,Europe",
    price:"5.42k",
    days:"3-5"
  },
  {
    id:"5",
  img:"https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?cs=srgb&dl=pexels-peng-liu-169647.jpg&fm=jpg",
  place:"Toki Japan",
  price:"5.42k",
  days:"1-3"
},
{
  id:"6",
img:"https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwY2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
place:"New,Yourk",
price:"5.42k",
days:"1-3"
},
{
  id:"7",
img:"https://www.investopedia.com/thmb/PHkZw2rPIHHhj7-KqcJiZ8NDVq4=/735x0/pedestrian-architecture-road-skyline-traffic-street-71505-pxhere.com-ea7fd4d112754938828312ff123c084c.jpg",
place:"Chocago",
price:"8.42k",
days:"3-5"
},
] 

/***/ }),

/***/ "./src/js/destinationModal.js":
/*!************************************!*\
  !*** ./src/js/destinationModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinationModal": () => (/* binding */ DestinationModal)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");


class DestinationModal extends _modal__WEBPACK_IMPORTED_MODULE_0__.Modal {
    constructor(classes, { id, img, place, price, days }) {
        super(classes)
        this.id=id;
        this.img=img;
        this.place=place;
        this.price=price;
        this.days=days
    }

    generateArticle() {
        let template = ""
        let article = document.createElement("div")
      
        article.setAttribute("data-id", this.id);
        this.img && (template += `<img class="modal__main-img" src=${this.img} alt="destination">`);
        if (this.place || this.price) {
            template += `<div class="trip__description">
    <p>${this.place}</p>
    <p>${this.price}</p>
</div>`
        }
        this.days && (template += `<div class="trip__duration">
   <img src="#" alt="">
   <span class="trip-days"> ${this.days}</span> <span>Days Trip</span>
</div>`)


        article.innerHTML = template

        return article
    }

    renderModal(){
       let content= this.generateArticle()
       this.buildModal(content)
    }

}






/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
    constructor(classes) {
        this.classes = classes,
            this.modal = "",
            this.modalContent = "",
            this.modalCloseBtn = "",
            this.overlay = ""
    }
    buildModal(content) {
        
        this.overlay = this.createDomNode(this.overlay, "div", 'overlay', 'overlay_modal')
        this.modal = this.createDomNode(this.modal, "div", 'modal', this.classes)
        this.modalContent = this.createDomNode(this.modalContent, "div", 'modal__content')
        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, "span", 'modal__close-icon')

        this.modalCloseBtn.innerHTML = "X"

        this.modalCloseBtn.addEventListener("click", this.closeModal)
        this.overlay.addEventListener("click", this.closeModal)

        this.setContent(content)
        this.appendsModalElements()
        this.openModal()
    }
    openModal() {
        document.body.prepend(this.overlay)
    }
    closeModal(e) {
        const clases=e.target.classList
        if(clases.contains("modal__close-icon")||clases.contains("overlay")){document.querySelector(".overlay").remove()}
        //
    }
    createDomNode(node, element, ...classes) {

        node = document.createElement(element)
        node.classList.add(...classes)
        return node

    }
    setContent(content) {
        this.modalContent.append(content)

    }

    appendsModalElements() {
        this.modal.append(this.modalCloseBtn)
        this.modal.append(this.modalContent)
        this.overlay.append(this.modal)

    }
}

/***/ }),

/***/ "./src/img/destinations/1.png":
/*!************************************!*\
  !*** ./src/img/destinations/1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a83645d4082aae68873.png";

/***/ }),

/***/ "./src/img/destinations/2.png":
/*!************************************!*\
  !*** ./src/img/destinations/2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b98874a44c6198303eaf.png";

/***/ }),

/***/ "./src/img/destinations/3.png":
/*!************************************!*\
  !*** ./src/img/destinations/3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69228d4b2ce91b43d0ac.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/data */ "./src/js/data.js");
/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Article */ "./src/js/Article.js");
/* harmony import */ var _js_destinationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/destinationModal */ "./src/js/destinationModal.js");
/* harmony import */ var _js_ChoseHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/ChoseHandler */ "./src/js/ChoseHandler.js");
/* harmony import */ var _js_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/Auth */ "./src/js/Auth.js");
/* harmony import */ var _js_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/Sidebar */ "./src/js/Sidebar.js");
/* harmony import */ var _js_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/Slider */ "./src/js/Slider.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _img_destinations_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/destinations/1.png */ "./src/img/destinations/1.png");
/* harmony import */ var _img_destinations_2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/destinations/2.png */ "./src/img/destinations/2.png");
/* harmony import */ var _img_destinations_3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img//destinations/3.png */ "./src/img/destinations/3.png");












window.onload = () => {

    addTagHandler()
    renderDestinaations()
    destinationModal()
    headerActiveLink()
    loginOrRegister()
    sidebar()
    aboutSlider()
}
const addTagHandler = () => {
    const buttons = document.querySelector(".destination__tags").addEventListener("click", (e) => {
        if (e.target.classList.contains("button")) {
            let clickedButton = e.target
            removeSelectedTags()
            addSelectedTag(clickedButton)
            if (clickedButton.innerText === "All") {
                showAllDestinations()
            }
            else {
                showOneDestinations(e.target.innerText)
            }
        }
    })

}
const showOneDestinations = (filterOption) => {
    const allDestinations = document.querySelectorAll(".destination__trip")

    allDestinations.forEach((e) => {
        e.classList.add("hide")
        const options = e.querySelectorAll(".trip-days")
        options.forEach((tag) => {


            if (filterOption.indexOf(tag.innerText) !== -1) {


                e.classList.remove("hide")

            }
        })




    })
}
const showAllDestinations = () => {
    const allDestinations = document.querySelectorAll(".destination__trip")

    allDestinations.forEach((e) => {
        e.classList.remove("hide")

    })
}
const removeSelectedTags = () => {
    let tags = document.querySelectorAll(".tag")
    tags.forEach(el =>
        el.classList.remove("button-colored"))
}

const addSelectedTag = (tag) => {
    tag.classList.add("button-colored")
}

const renderDestinaations = () => {
    const container = destinationWrapper()
    const destinationContainer = document.querySelector('.destination__direction')
    genetateDestinations(_js_data__WEBPACK_IMPORTED_MODULE_0__.destinations).forEach(el => {
        el.generateArticle()
        destinationContainer.appendChild(el.generateArticle())

    })

}

const destinationWrapper = () => {
    const destinationContainer = document.querySelectorAll('.destination__direction')
    destinationContainer.forEach(item => item.innerHTML = "")
    return destinationContainer
}
const genetateDestinations = (data) => {
    let articles = []

    data.forEach((article,i) => {
i==0&&(article.img=_img_destinations_1_png__WEBPACK_IMPORTED_MODULE_8__)
i==1&&(article.img=_img_destinations_2_png__WEBPACK_IMPORTED_MODULE_9__)
i==2&&(article.img=_img_destinations_3_png__WEBPACK_IMPORTED_MODULE_10__)
        articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_1__.Article(article))
    }

    )
    return articles
}
const loginOrRegister=()=>{
    const btn = document.querySelector(".header__buttons").addEventListener("click", (e) => {
const current=e.target.innerHTML
if(current==="Login"){

  const login=new _js_Auth__WEBPACK_IMPORTED_MODULE_4__.Auth("Login")
  login.renderModal()

}
if(current==="SignUp"){
  
    const login=new _js_Auth__WEBPACK_IMPORTED_MODULE_4__.Auth("Register")
    login.renderModal()
  
  }
})

}





const destinationModal = () => {
    let id = ""
    const container = document.querySelector(".destination__direction")
    container.addEventListener("click", (e) => {

        id = (e.target.closest(".destination__trip").getAttribute("data-id"))

        let destination = _js_data__WEBPACK_IMPORTED_MODULE_0__.destinations.find(d => d.id == id)

        let modal = new _js_destinationModal__WEBPACK_IMPORTED_MODULE_2__.DestinationModal("destination-modal",destination)
        modal.renderModal()
    })

}

const headerActiveLink=()=>{
    
    ;(0,_js_ChoseHandler__WEBPACK_IMPORTED_MODULE_3__.choseHandler)(".header__navigation","navigation__link")
}

const sidebar=()=>{
  const buttonSidebar= document.querySelector(".hamburger")
 
   buttonSidebar.addEventListener("click",()=>{
  buttonSidebar.classList.toggle("hamburger__active")
     renderSidebar(buttonSidebar)

   })

}

const renderSidebar=(buttonHamburger)=>{
   
const sidebar=new _js_Sidebar__WEBPACK_IMPORTED_MODULE_5__.Sidebar(buttonHamburger)
sidebar.geterateSidebar()

}
////////////AboutSlider
const aboutSlider=()=>{
    const buttons=document.querySelectorAll(".rounded__button")
//console.log(buttons[0].getAttribute("data-id"));
const slider=new _js_Slider__WEBPACK_IMPORTED_MODULE_6__.Slider({
    left:buttons[0],
    right:buttons[1]
})

}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map