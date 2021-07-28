import astronautImg from '../../images/astronaut.jpg';

export default function Planets(planets) {
  return `
       <ul>
    ${planets.map((planet) => {
        return `
        <!--<li class="planets-list">${planet.id}</li>-->
        <li class="planets-list">Name: ${planet.name}
        <img src="${planet.picture}"/></li>
        <li class="planets-list">Distance from the sun: ${planet.location}</li>
        <li class="planets-list">Description: ${planet.description}</li>
                `;
      })
      .join('')}
    </ul>
    `;
}