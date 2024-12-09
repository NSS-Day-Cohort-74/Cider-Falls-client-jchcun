const database = {
    guests:[
           {
           id: 1,
           firstName: "Ricky",
           lastName: "Bobby",
           areaId: 1,
           serviceId: 1
    }
   ],
   areas: [
           {
           id: 1,
           name: "Trail Name",
           location: "Trail Location",
           guestId: 1
    }
   ],
    services: [
           {
           id: 1,
           name: "Service Name"
    }
   ],
    serviceAreas: [
           {
       id: 1,
       servicesId: 1,
       areasId: 1
    }]
   }
   
   export const getGuests = () => {
       return database.guests.map(guests => ({...guests}))
   }
   export const getAreas = () => {
       return database.areas.map(areas => ({...areas}))
   }
   export const getServices = () => {
       return database.services.map(services => ({...services}))
   }
   export const getServiceAreas = () => {
       return database.serviceAreas.map(serviceAreas => ({...serviceAreas}))
   }