import { getAreas, getGuests, getServiceAreas, getServices } from "./database.js"

const serviceAreas = getServiceAreas()
const areas = getAreas()
const services = getServices()

//Create a function whose responsibility is to find the area that matches the areaId of the ServiceAreas object
/*const findArea = (serviceArea, allAreas) => {
    let areaName = null

    for (const area of allAreas) {
        if(parseInt(area.id) === serviceArea.areasId) {
            areaName = area.name
        }
    }
    return areaName
}*/


//Create a function whose responsibility is to return an array of services that match the areaId in question

/*const findServices = (serviceArea, allServices) => {
    let serviceName = []

    for (const service of allServices) {
        if (parseInt(services.id) === serviceArea.servicesId){
         serviceName.push(service.name)   
        }
    }
    return serviceName
}*/




//export a function that loops through each area and calls the find area and the find services functions to give the name and the list of services needed

/*export const areasHTML = () => {
    let html = "<ul>"

    for (const serviceArea of serviceAreas) {
        const destination = findArea(serviceArea, areas)
        const servicesList = findServices(serviceArea, services)

        html += `
                <li 
                data-type="area"
                data-areaId="${serviceArea.areasId}"
                data-serviceId="${serviceArea.servicesId}">
                    <h3 class="destination name">${destination.name}</h3>
                    <p> Services Available: ${servicesList} </p>
                </li> 
        `
    }
    html += "</ul>"

    return html
} */




export const areasHTML = () => {
    let html ="<ul>"

    for (const area of areas) {
        const servicesList = findServices(area, services)
        
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