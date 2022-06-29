import { Modal } from "./modal"


export class Auth extends Modal{

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