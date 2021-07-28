export default function InterestingInfo(interestingInfos) {

    return `
    <ul class="interestingInfo-list">
    ${interestingInfos.map((interestingInfoTag) => {
        return`
        <li class="interestingInfo-list__age">${interestingInfoTag.age}</li>
        <li class="interestingInfo-list__distance">${interestingInfoTag.distance}</li>
        <li class="interestingInfo-list__size">${interestingInfoTag.size}</li>
        <li class="interestingInfo-list__weight">${interestingInfoTag.weight}</li>
               
        `;
    })
    .join('')}
    </ul>
    `;
}