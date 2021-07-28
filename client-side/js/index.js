import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Planets from './components/Planets';
import Met from './components/Met';
import HashTags from './components/HashTags';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import crud from './crud/crud';
import Planet from './components/Planet';
import PlanetsPage from './pages/PlanetsPage';
import HashTagsPage from './pages/HashTagsPage';
import Contact from './components/ContactUs';
import Form from './components/Form';
import fetchNasa from './components/nasa.js';
import InterestingInfoPage from './pages/InterestingInfoPage';




buildPage();

function buildPage() {
    header();
    footer();
    navHome();
    navHashTags();
    navPlanets();
    about();
    navContactUs();
    navMet()
    contact();
    navNasa();
    form();
    planet(),
        interestingInfo();



}

function header() {
    const headerElem = document.querySelector(".header");
    headerElem.innerHTML = Header();
}

function footer() {
    const footerElem = document.querySelector(".footer");
    footerElem.innerHTML = Footer();
}

function navHome() {
    const homeElem = document.querySelector(".nav-list__home");
    homeElem.addEventListener('click', () => {
        const app = document.querySelector("#app");
        app.innerHTML = Home();
    });
}

function contact() {
    const homeElem = document.querySelector(".nav-list__contactUs");
    homeElem.addEventListener("click", () => {
        const app = document.querySelector("#app");
        app.innerHTML = Contact();
    });
}

function about() {
    const aboutElem = document.querySelector(".nav-list__aboutUs");
    aboutElem.addEventListener("click", () => {
        const app = document.querySelector("#app");
        app.innerHTML = AboutUs();
    });
}

function form() {
    const homeElem = document.querySelector(".nav-list__form");
    homeElem.addEventListener("click", () => {
        const app = document.querySelector("#app");
        app.innerHTML = Form();
    });
}

// function navTutors() {
//     const tutorsElem = document.querySelector('.nav-list__tutors');
//     tutorsElem.addEventListener('click', () => {
//         const app = document.querySelector('#app');
//         // app.innerHTML = Tutors();
//         crud.getRequest('http://localhost:8080/api/tutors', Tutors => {
//             app.innerHTML = Tutors(tutors);
//         });
//     });
// }

function navContactUs() {
    const contactUsElem = document.querySelector(".nav-list__contactUs");
    contactUsElem.addEventListener('click', () => {
        const app = document.querySelector("#app");
        app.innerHTML = ContactUs();
    });
}



function navPlanets() {
    const planetsElem = document.querySelector(".nav-list__planets");
    planetsElem.addEventListener('click', () => {
        const app = document.querySelector('#app');
        crud.getRequest('http://localhost:8080/api/planets', planets => {
            console.log(planets)
            app.innerHTML = PlanetsPage(planets);
        });
    });

}

function navNasa() {
    const nasaElem = document.querySelector(".nav-list__nasa");
    nasaElem.addEventListener('click', () => {
        fetchNasa()
    });

}

// function renderPlanetInfo() {
//     const app = document.querySelector('#app');
//     app.addEventListener('click', () => {
//         if (event.target.classList.contains('planets-list__name')) {
//             const planetId = event.target.querySelector('#planetId').value;
//             crude.getRequest(`http://localhost:8080/api/planets/${planetId}`, planet => {
//                 app.innerHTML = Planets(planet);

//             });

//         }
//     });


// }

function navHashTags() {
    const hashTagsElem = document.querySelector(".nav-list__hashtags");
    hashTagsElem.addEventListener('click', () => {
        const app = document.querySelector('#app');
        crud.getRequest('http://localhost:8080/api/hashtags', hashTags => {
            console.log(hashTags);
            app.innerHTML = HashTagsPage(hashTags);
        });
    });



}



function navMet() {
    const metElem = document.querySelector('.nav-list__met');
    metElem.addEventListener('click', () => {
        const app = document.querySelector('#app');
        crud.getRequest('https://www.metmuseum.org/art/collection/search#!?searchField=All&sortBy=Relevance&q=Art%20Deco&offset=0&perPage=20', met => {
            app.innerHTML = Met(met);
        });
    });
}