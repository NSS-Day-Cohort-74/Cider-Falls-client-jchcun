import { getAreas, getGuests, getServiceAreas, getServices } from "./database"

const serviceAreas = getServiceAreas()
const areas = getAreas()
const services = getServices()

//Create a function whose responsibility is to find the area that matches the areaId of the ServiceAreas object
const findArea = (serviceArea, allAreas) => {
    let areaName = null

    for (const area of allAreas) {
        if(parseInt(area.id) === serviceArea.areasId) {
            areaName = area.name
        }
    }
    return areaName
}


//Create a function whose responsibility is to return an array of services that match the areaId in question

const findServices = (serviceArea, allServices) => {
    let serviceName = []

    for (const service of allServices) {
        if (parseInt(services.id) === serviceArea.servicesId){
         serviceName.push(service.name)   
        }
    }
    return serviceName
}
