import { getAreas, getGuests, getServiceAreas, getServices } from "./database.js"

const serviceAreas = getServiceAreas()
const areas = getAreas()
const services = getServices()


document.addEventListener(
    "click",
    (areaClickEvent) => {
        const areaClicked = areaClickEvent.target
        const clickedAreaId = areaClicked.dataset.areaid
        
        if(areaClicked.dataset.type === "area"){
            let guestCounter=0
            const guests = getGuests()
            for (const guest of guests) {
                if(parseInt(clickedAreaId) === guest.areaId){
                    guestCounter++
                }
            }
            window.alert(`There are ${guestCounter} guests in this area.`)
        }

    }
)

const findServices = (areaObject, allServicesAreas) => {
    let serviceNamesList = []
    for (const serviceArea of allServicesAreas) {
        
        if(areaObject.id === parseInt(serviceArea.areasId)){
            for (const service of services) {
                if (service.id === parseInt(serviceArea.servicesId)){
                    serviceNamesList.push(service.name)
                }
                
            }
            
        }
    }
    return serviceNamesList
}

export const areasHTML = () => {
    let html ="<ul>"

    for (const area of areas) {
        const servicesList = findServices(area, serviceAreas)
        
        html +=  `
                <li 
                data-type="area"
                data-areaId="${area.id}">
                    <h3 class="destination name">${area.name}</h3>
                    <p> Services Available: ${servicesList} </p>
                </li> 
        `
    }
    html += "</ul>"

    return html
}
