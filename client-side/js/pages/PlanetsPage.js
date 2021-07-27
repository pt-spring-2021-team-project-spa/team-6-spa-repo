import astronautImg from '../../images/astronaut.jpg';

import Planets from '../components/Planets.js';
export default function PlanetsPage(planets) {
    return `
    <h1>Explore the Planets</h1>
    ${Planets(planets)}
    `;
}