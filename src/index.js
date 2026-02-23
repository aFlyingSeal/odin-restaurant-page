import "./styles.css";

import createHome from "./pages/home";
import createMenu from "./pages/menu";
import createAbout from "./pages/about";

const content = document.getElementById("content");
const navBtns = document.querySelectorAll(".nav-btn");

let currentPage = null;

function loadPage(createPage){
    const newPage = createPage();

    if (currentPage){
        currentPage.classList.remove("active");

        setTimeout(() => {
            content.textContent = "";
            content.appendChild(newPage);

            requestAnimationFrame(() => {
                newPage.classList.add("active");
            });

            currentPage = newPage;
        }, 250);
    }
    else{
        content.appendChild(newPage);
        requestAnimationFrame(() => {
            newPage.classList.add("active");
        });
        currentPage = newPage;
    }
}

navBtns[0].addEventListener("click", () => loadPage(createHome));
navBtns[1].addEventListener("click", () => loadPage(createMenu));
navBtns[2].addEventListener("click", () => loadPage(createAbout));

loadPage(createHome);