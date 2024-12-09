import { servicesHTML, serviceListClickEvent } from "./services.js";
import { guestsHTML } from "./guests.js";
import { areasHTML } from "./areas.js";

// rendering services and attaching the event listener for the servicelist clickEvent
//document.querySelector("#container").innerHTML += servicesHTML();
//serviceListClickEvent();

const mainContainer = document.querySelector("#container");

const applicationHTML = `
    <article class="details">
        <section class="details_services">
            <h2>Services Available:${servicesHTML()}</h2>
        </section>
        <section class="detail--locations cards list details_parks">
            <h2>Destinations</h2>
            ${areasHTML()}
        </section>
        <section class="detail--guest list">
            <h2>Guests</h2>
            ${guestsHTML()}
        </section>
    </article>
    `;

mainContainer.innerHTML = applicationHTML;
