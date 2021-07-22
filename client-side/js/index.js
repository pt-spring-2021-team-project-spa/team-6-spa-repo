<<<<<<< HEAD
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


=======
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Tutor1 from "./components/Tutor1";
import Tutor2 from "./components/Tutor2";
import Contact from "./components/ContactUs";
import Form from "./components/Form";
import AboutUs from "./components/AboutUs";
>>>>>>> main

buildPage();

function buildPage() {
<<<<<<< HEAD
    header();
    footer();
    navHome();
    navTutors();
    navScience();
    navHistory();
    navArt();
=======
  header();
  footer();
  navHome();
  navTutor1();
  navTutor2();
  navContactUs();
  navForm();
  navAboutUs();
>>>>>>> main
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
  homeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Home();
  });
}

<<<<<<< HEAD
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
=======
function navTutor1() {
  const tutor1Elem = document.querySelector(".nav-list__tutor1");
  tutor1Elem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Tutor1();
  });
}

function navTutor2() {
  const tutor2Elem = document.querySelector(".nav-list__tutor2");
  tutor2Elem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Tutor2();
  });
}

function navContactUs() {
  const contactElem = document.querySelector(".nav-list__contact");
  contactElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Contact();
  });
}

function navForm() {
  const formElem = document.querySelector(".nav-list__form");
  formElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Form();
  });
}

function navAboutUs() {
  const aboutElem = document.querySelector(".nav-list__about");
  aboutElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = AboutUs();
  });
}
>>>>>>> main
