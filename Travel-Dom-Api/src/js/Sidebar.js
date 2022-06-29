


export class Sidebar {
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