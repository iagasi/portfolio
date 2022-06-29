export class Modal {
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