export const choseHandler = (className, wantCapture) => {
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