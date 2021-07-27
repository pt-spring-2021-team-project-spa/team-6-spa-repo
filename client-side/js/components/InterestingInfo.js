import globeImg from '../../images/globehead.jpg';

export default function InterestingInfo(interestingInfo) {

    return `
    <ul class="interestingInfo-list">
    ${interestingInfo.results
        .map((interestingInfo) => {
        return`
        <li class="interestingInfo-list__id">${interestingInfoTag.age}</li>
        <li class="interestingInfo-list__id">${interestingInfoTag.distance}</li>
        <li class="interestingInfo-list__id">${interestingInfoTag.size}</li>
        <li class="interestingInfo-list__id">${interestingInfoTag.weight}</li>
               
        `;
    })
    .join('')}
    </ul>
    `;
}