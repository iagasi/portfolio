export class Article {
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



