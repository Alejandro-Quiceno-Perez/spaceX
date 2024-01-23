const containerCards = document.querySelector("#container-cards");

/* BOTON VER MAS */
const btnVerMas = document.createElement("button");
btnVerMas.getAttribute("btn btn-primary");

/* BOTON VER MAS */

async function getData() {
    const URL = `https://api.spacexdata.com/v3/launches/`;
    const response = await fetch(URL);
    const data = await response.json();

    printCards(data);
}

function printCards(data) {
    console.log(data);

    data.forEach(e => {
        containerCards.innerHTML += `
        <div class="card mt-5 bg-dark text-center">
            <img src="${e.links.mission_patch_small}" class="card-img-top">
            <div class="card-body text-white">
                <h5 class="card-title">${e.mission_name}</h5>
                <p class="card-text">${e.launch_year}</p>
                <a href="#" onclick="console.log(${e.flight_number})" class="btn btn-primary">Ver mas</a>
            </div>
        </div>
    `

    // containerCards.appendChild(btnVerMas);
    });
    
}

getData()