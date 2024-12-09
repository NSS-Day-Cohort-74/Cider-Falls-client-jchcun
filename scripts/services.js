import { getServiceAreas, getAreas, getServices } from "./database.js";

const findAreasByService = (serviceId) => {
  const serviceAreas = getServiceAreas();
  const areas = getAreas();

  // first I filtered the serviceAreas for matching serviceIds, and mapped those into a new array of area objects
  return serviceAreas
    .filter((sa) => sa.servicesId === serviceId)
    .map((sa) => areas.find((area) => area.id === sa.areaId));
};

// here I create the html strings
export const servicesHTML = () => {
  const services = getServices();
  const servicesHtml = `
        <section id="services">
            <h2>Available Park Services</h2>
            <ul id="service-list">
                ${services
                  .map(
                    (service) =>
                      `<li data-service-id="${service.id}">${service.name}</li>`
                  )
                  .join("")}
            </ul>
        </section>
    `;

  return servicesHtml;
};

// here I create the event listener for the service list clickEvent
export const serviceListClickEvent = () => {
  const serviceList = document.querySelector("#service-list");

  serviceList.addEventListener("click", (event) => {
    const serviceId = parseInt(event.target.dataset.serviceId);

    if (serviceId) {
      const matchingAreas = findAreasByService(serviceId);
      const areaNames = matchingAreas.map((area) => area.name).join(", ");

      alert(
        areaNames.length > 0
          ? `Areas offering this service: ${areaNames}`
          : "No areas offer this service."
      );
    }
  });
};
