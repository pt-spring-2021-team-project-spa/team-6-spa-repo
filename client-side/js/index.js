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


buildPage();

function buildPage() {
    header();
    footer();
    navHome();
    navHashTags();
    navPlanets();
    navAboutUs();
    navContactUs();
    navMet()





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

function navAboutUs() {
    const aboutUsElem = document.querySelector(".nav-list__aboutUs");
    aboutUsElem.addEventListener('click', () => {
        const app = document.querySelector("#app");
        app.innerHTML = AboutUs();
    });
}

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
            app.innerHTML = Planets(planets);
        });
        renderPlanetInfo();
    });

}

function renderPlanetInfo() {
    const app = document.querySelector('#app');
    app.addEventListener('click', () => {
        if (event.target.classList.contains('planets-list__name')) {
            const planetId = event.target.querySelector('#planetId').value;
            crude.getRequest(`http://localhost:8080/api/planets/${planetId}`, planet => {
                app.innerHTML = Planets(planet);

            });

        }
    });


}

function navHashTags() {
    const hashTagsElem = document.querySelector(".nav-list__hashTags");
    hashTagsElem.addEventListener('click', () => {
        const app = document.querySelector('#app');
        crud.getRequest('http://localhost:8080/api/hashTags', hashTags => {
            app.innerHTML = HashTags(hashTags);
        });
    });



}



function navMet() {
    const metElem = document.querySelector('.nav-list__met');
    metElem.addEventListener('click', () => {
        const app = document.querySelector('#app');
        crud.getRequest('http://localhost:8080/api/art', met => {
            app.innerHTML = Met(met);
        });
    });
}