export class Slider {
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