function createHome(){
    const container = document.createElement("div");
    container.classList.add("home-container");
    container.innerHTML = `
        <h2>Welcome to My Restaurant!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, fugiat et, dolore quae doloremque, corrupti nostrum blanditiis quis illum in ad debitis quo! Ut veritatis architecto consequatur quod sed dolore! Soluta ut inventore tempore minima libero pariatur perspiciatis autem quos.</p>
    `;
    return container;
}

export default createHome;