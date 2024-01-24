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
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="console.log(${modal()})" class="btn btn-primary">Ver mas</button>
            </div>
        </div>
    `
    });

}

function modal() {
    const modal = document.querySelector("#modal");
    modal.innerHTML = `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>

    `
}




/* Funciones */
getData();