import astronautImg from '../../images/astronaut.jpg';
export default function Planets(planets) {
    return `
    <h1>What You'll Learn is Out of This World!</h1>
    <ul>
    ${planets.results
      .map((planets) => {
        return `
        <li class="planets-list__id">${planet.id}
        <input type="hidden" id="planetId" value=${planet.id}"
        </li>
        <li class="planets-list__name">${planet.name}</li>
        <li class="planets-list__location">${planet.location}</li>
        <li class="planets-list__location">${planet.interestingInfos}</li>
        `;
      })
      .join('')}
    </ul>
    `;
}



// import astronautImg from '../../images/astronaut.jpg';
// export default function Science() {
//     return `
//     <h1>What You'll Learn is Out of This World!</h1>
//     <img class="page-image" src="${astronautImg}" alt="astronaut">

//     `;
// }