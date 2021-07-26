import globeImg from '../../images/globehead.jpg';
import HashTags from '../components/HashTags.js';

export default function HashTagsPage(hashTags) {
    return `
    <h1>Explore Content Hashtags</h1>
    ${HashTags(hashTags)}
    `;
}











export default function History(history) {
    return `
    ${history.map(art =>{
        
    })}
    `;
}