const database = {
    guests:[
           {
           id: 4,
           firstName: "Ethan",
           lastName: "Brown",
           areaId: 1
    },
           {
           id: 3,
           firstName: "Niles",
           lastName: "Clancy",
           areaId: 2
    },
           {
           id: 2,
           firstName: "Joanna",
           lastName: "Scott-Scates",
           areaId: 3
    },
           {
           id: 1,
           firstName: "Darren",
           lastName: "Raines",
           areaId: 4
}],
   areas: [
           {
           id: 1,
           name: "Chamfort River",
           location: "Northeast"
    },
           {
           id: 2,
           name: "Lost Wolf Hiking Trail",
           location: "Northern"
    },
           {
           id: 3,
           name: "Lodge",
           location: "Northwest"
    },
           {
           id: 4,
           name: "Gander River",
           location: "Southwest"
    },
           {
           id: 5,
           name: "Campgrounds",
           location: "Southern"
    },
           {
           id: 6,
           name: "Pine Bluffs Trails",
           location: "Southeast" 
    }],
    services: [
           {
           id: 1,
           name: "Hiking"
    },
           {
           id: 2,
           name: "Rock Climbing"
    },
           {
           id: 3,
           name: "Zip Lines"
    },
           {
           id: 4,
           name: "Rafting"
    },
           {
           id: 5,
           name: "Canoeing"
    },
          {
           id: 6,
           name: "Fishing"
    },
           {
           id: 7,
           name: "Picnicking"
    },
           {
           id: 8,
           name: "Lodging"
    },
           {
           id: 9,
           name: "Parking"
    },
           {
           id: 10,
           name: "Information"
    },
           {
           id: 11,
           name: "Restaurant"
    },
           {
           id: 12,
           name: "Food Vendors"
    },
           {
           id: 13,
           name: "Children's Play Area"
    },
           {
           id: 14,
           name: "Office Park"
    },
           {
           id: 15,
           name: "Hotel"
    }],
    serviceAreas: [
           {
       id: 1,
       servicesId: 1,
       areasId: 6
    },
           {
       id: 2,
       servicesId: 7,
       areasId: 6
    },
           {
       id: 3,
       servicesId: 3,
       areasId: 6
    },
           {
       id: 4,
       servicesId: 8,
       areasId: 5
    },
           {
       id: 5,
       servicesId: 9,
       areasId: 5
    },
           {
       id: 6,
       servicesId: 10,
       areasId: 5
    },
           {
       id: 7,
       servicesId: 13,
       areasId: 5
    },
           {
       id: 8,
       servicesId: 14,
       areasId: 5
    },
           {
       id: 9,
       servicesId: 1,
       areasId: 4
    },
           {
       id: 10,
       servicesId: 6,
       areasId: 4
    },
           {
       id: 11,
       servicesId: 15,
       areasId: 3
    },
           {
       id: 12,
       servicesId: 11,
       areasId: 3
    },
           {
       id: 13,
       servicesId: 8,
       areasId: 3
    },
           {
       id: 14,
       servicesId: 9,
       areasId: 3
    },
           {
       id: 15,
       servicesId: 10,
       areasId: 3
    },
           {
       id: 16,
       servicesId: 7,
       areasId: 3
    },
           {
       id: 17,
       servicesId: 1,
       areasId: 2
    },
           {
       id: 18,
       servicesId: 2,
       areasId: 2
    },
           {
       id: 19,
       servicesId: 7,
       areasId: 2
    },
           {
       id: 20,
       servicesId: 4,
       areasId: 1
    },
           {
       id: 21,
       servicesId: 5,
       areasId: 1
    },
           {
       id: 22,
       servicesId: 6,
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