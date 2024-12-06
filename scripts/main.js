import { } from "./guests.js"
import { } from "./areas.js"
import { } from "./service.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <article class="details">
        <section class="details_services">
            <h2>Services Available:${servicesPlaceholder}</h2>
        </section>
        <section class="detail--locations cards list details_parks">
            <h2>Destinations</h2>
            ${areasPlaceholder}
        </section>
        <section class="detial--guest list">
            <h2>Guests</h2>
            ${guestsPlaceholder}
        </section>
    </article>
    `