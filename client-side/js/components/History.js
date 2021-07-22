import globeImg from '../../images/globehead.jpg';

export default function History(history) {
    //console.log(history); can used to check output
    return `
    <h1>Know Where Your Going by Where You've Been!</h1>
    <img class="page-image" src="${globeImg}" alt="globe">
<ul class="history-list">
    ${history.map(history => {
        return`
        <li class="history-list__subject">${history.subject}</li>
        `;
    }).join('')}
    </ul>
    `;
}