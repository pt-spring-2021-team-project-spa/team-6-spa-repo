import Planets from '../components/Planets.js';

export default function PlanetsPage(planets) {
    return `
    <h1>What You'll Learn is Out of This World!</h1>
    <h2>Explore the Planets</h2>
    ${Planets(planets)}
        `;
}