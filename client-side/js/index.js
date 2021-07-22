import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Tutor1 from "./components/Tutor1";
import Tutor2 from "./components/Tutor2";
import Contact from "./components/ContactUs";
import Form from "./components/Form";
import AboutUs from "./components/AboutUs";

buildPage();

function buildPage() {
  header();
  footer();
  navHome();
  navTutor1();
  navTutor2();
  navContactUs();
  navForm();
  navAboutUs();
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
