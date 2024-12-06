/*
    This module will be importing data from the database.js module. The data included in the import  should be a copy
    of an array of objects from the database. They array of objects will be stored.
    The objects should be represented as follows: 
    
    {
        id: int
        name: " "
        areaId: int foreign key 
    }
    
    The requirements of this module is to form a string of HTML for each iteration of the guests objects. The string HTML should 
    be wrapped in a <ul></ul> tag, but not for each iteration. Each iteration of the object, they will be wrapped in <li></li> tags
    The foreign key will have to be added as state data for checks in the event listeners to come. 
*/

import { getGuests } from "database.js";

const guests = getGuests()

export const guestsHTML = () => {
    let html = `<ul>`

    for (const guest of guests) {
        html += `<li data-type="guest" 
                     data-areaid="${guest.areaId}">
                     ${guest.name}
                </li>`
    }
    html += `</ul>`

    return html
}

// This function will be exported to the main module when it is created.