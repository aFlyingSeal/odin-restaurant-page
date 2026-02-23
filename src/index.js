import "./styles.css";

import createHome from "./pages/home";
import createMenu from "./pages/menu";
import createAbout from "./pages/about";

const content = document.getElementById("content");
const navBtns = document.querySelectorAll(".nav-btn");

function loadPage(page){
    content.textContent = "";
    content.appendChild(page);
}

navBtns[0].addEventListener("click", () => loadPage(createHome()));
navBtns[1].addEventListener("click", () => loadPage(createMenu()));
navBtns[2].addEventListener("click", () => loadPage(createAbout()));

function loadHomepage(){
    content.appendChild(createHome());
}

loadHomepage();