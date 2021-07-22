//import handsImg from '../images/colorful kids painted hands.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Tutors from './components/Tutors';
import Science from './components/Science';
import Art from './components/Art';
import History from './components/History';
import crud from './crud/crud';
// import pages: history, science, art



buildPage();

function buildPage() {
    header();
    footer();
    navHome();
    navTutors();
    navScience();
    navHistory();
    navArt();
}

function header() {
    const headerElem = document.querySelector('.header');
    headerElem.innerHTML = Header();


}

function footer() {
    const footerElem = document.querySelector('.footer');
    footerElem.innerHTML = Footer();

}

function navHome() {
    const homeElem = document.querySelector('.nav-list__home');
    homeElem.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = Home();
    });
}

function navTutors() {
    const tutorsElem = document.querySelector('.nav-list__tutors');
    tutorsElem.addEventListener('click', () => {
        const app = document.querySelector('#app');
        // app.innerHTML = Tutors();
        crud.getRequest('http://localhost:8080/api/tutors', Tutors => {
            app.innerHTML = Tutors(tutors);
        });
    });
}

function navScience() {
    const scienceElem = document.querySelector('.nav-list__science');
    scienceElem.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = Science();
        crud.getRequest('http://localhost:8080/api/science', Science => {
            app.innerHTML = Science(science);
        });

    });
}

function navHistory() {
    const historyElem = document.querySelector('.nav-list__history');
    historyElem.addEventListener('click', () => {
        const app = document.querySelector('#app');
        crud.getRequest('http://localhost:8080/api/history', History => {
            app.innerHTML = History(history);
            // url is end point or Orpa's work  & History(history) fetch & using that info
        });

    });
}

function navArt() {
    const artElem = document.querySelector('.nav-list__art');
    artElem.addEventListener('click', () => {
        const app = document.querySelector('#app');
        // app.innerHTML = Art();
        crud.getRequest('http://localhost:8080/api/art', Art => {
            app.innerHTML = Art(art);
        });
    });
}