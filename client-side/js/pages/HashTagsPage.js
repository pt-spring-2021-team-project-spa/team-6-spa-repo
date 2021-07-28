import HashTags from '../components/HashTags.js';

export default function HashTagsPage(hashTags) {
    return `
    <h1>Explore Hashtags Content</h1>
    ${HashTags(hashTags)}
    `;
}