function createAbout(){
    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `
        <div class="header">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nam optio veritatis? Officia, expedita neque! Deleniti earum repellendus ducimus natus et. Molestiae error vitae fuga tempore dolore veritatis pariatur nostrum!</p>
        </div>
    `;
    return container;
}

export default createAbout;