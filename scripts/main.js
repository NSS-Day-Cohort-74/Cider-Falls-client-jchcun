import { servicesHTML, serviceListClickEvent } from "./services.js";
import { guestsHTML } from "./guests.js";
import { areasHTML } from "./areas.js";

// rendering services and attaching the event listener for the servicelist clickEvent
document.querySelector("#container").innerHTML += servicesHTML();
serviceListClickEvent();

const mainContainer = document.querySelector("#container");

const applicationHTML = `
    <article class="details">
        <section class="servicelist">
            <h2>Services Available:</h2>
            ${servicesHTML()}
        </section>
         <section class="guestlist">
            <h2>Guests</h2>
            ${guestsHTML()}
        </section>
        <section class="destinationlist">
            <h2>Destinations</h2>
            ${areasHTML()}
        </section>
       
    </article>
    `;

mainContainer.innerHTML = applicationHTML;