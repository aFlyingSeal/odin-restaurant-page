function createMenu(){
    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `
        <div class="header">
            <h2>Our Restaurant Menu</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, consectetur perferendis nisi at a sint ad voluptatum doloribus repellat omnis nulla magnam debitis autem asperiores est nostrum dignissimos quia fugit.</p>
        </div>
    `;
    return container;
}

export default createMenu;