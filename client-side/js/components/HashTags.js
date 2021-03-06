export default function HashTags(hashTags) {

    return `
    <ul class="hashTags-list">
    ${hashTags.map((hashTag) => {
        return`
        <li class="hashTag-list__id">${hashTag.id}</li>
        <li class="hashTag-list__name">${hashTag.name}</li>
        <li class="hashTag-list__subject">${hashTag.subject}</li>
        
        `;
    })
    .join('')}
    </ul>

        `;
}