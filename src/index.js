import "./styles.css";

import createHome from "./pages/home";

const content = document.getElementById("content");

function loadHomepage(){
    content.appendChild(createHome());
}

loadHomepage();