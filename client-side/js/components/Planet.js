export default function Planet(planet) {

    return `
    <h1>planet.id</h1>
    <h2>planet.name</h2>
    <h3>planet.location</h3>
    <h3>planet.interesting.Info</h3>
    
    <h3>HashTags...</h3>
    <ul>
    ${planet.hashTags.map(hashTag => {
        return`
        <li>
        <span>${planet.name}</span>
        </li>
           `;

    }).join('')}
    </ul>
    <section class="add-hashtag">
    <input class="add-hashtag__name" type="text" placeholder="Add a HashTag to Save"/>
<button class="add-hashtag__submit">planetSubmit</button>
<input type="hidden" id="planetId" value="${planet.id}"/>
    </section>
    `;
}