import { destinations } from "./js/data"
import { Article } from "./js/Article"
import { DestinationModal } from "./js/destinationModal"
import { choseHandler } from "./js/ChoseHandler"
import { Auth, Login } from "./js/Auth"
import { Sidebar } from "./js/Sidebar"
import { Slider } from "./js/Slider"
import "./scss/main.scss"
import img0 from "./img/destinations/1.png"
import img1 from "./img/destinations/2.png"
import img2 from "./img//destinations/3.png"

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
    genetateDestinations(destinations).forEach(el => {
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
i==0&&(article.img=img0)
i==1&&(article.img=img1)
i==2&&(article.img=img2)
        articles.push(new Article(article))
    }

    )
    return articles
}
const loginOrRegister=()=>{
    const btn = document.querySelector(".header__buttons").addEventListener("click", (e) => {
const current=e.target.innerHTML
if(current==="Login"){

  const login=new Auth("Login")
  login.renderModal()

}
if(current==="SignUp"){
  
    const login=new Auth("Register")
    login.renderModal()
  
  }
})

}





const destinationModal = () => {
    let id = ""
    const container = document.querySelector(".destination__direction")
    container.addEventListener("click", (e) => {

        id = (e.target.closest(".destination__trip").getAttribute("data-id"))

        let destination = destinations.find(d => d.id == id)

        let modal = new DestinationModal("destination-modal",destination)
        modal.renderModal()
    })

}

const headerActiveLink=()=>{
    
    choseHandler(".header__navigation","navigation__link")
}

const sidebar=()=>{
  const buttonSidebar= document.querySelector(".hamburger")
 
   buttonSidebar.addEventListener("click",()=>{
  buttonSidebar.classList.toggle("hamburger__active")
     renderSidebar(buttonSidebar)

   })

}

const renderSidebar=(buttonHamburger)=>{
   
const sidebar=new Sidebar(buttonHamburger)
sidebar.geterateSidebar()

}
////////////AboutSlider
const aboutSlider=()=>{
    const buttons=document.querySelectorAll(".rounded__button")
//console.log(buttons[0].getAttribute("data-id"));
const slider=new Slider({
    left:buttons[0],
    right:buttons[1]
})

}