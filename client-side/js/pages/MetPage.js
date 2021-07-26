import Met from '../components/Met.js';
export default function MetPage(met) {
    return `
    <h1>Metropolitan Museum</h1>
    ${Met(met)}
    `;
}