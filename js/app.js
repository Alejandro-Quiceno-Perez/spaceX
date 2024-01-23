const containerCards = document.querySelector("#container-cards");

async function getData() {
    const URL = `https://api.spacexdata.com/v3/launches/`;
    const response = await fetch(URL);
    const data = await response.json();

    printCards(data);
}

function printCards(data) {
    console.log(data);


    containerCards.innerHTML = `
        <div class="card">
            <img src="${data[0].links.mission_patch_small}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${data[0].mission_name}</h5>
                <p class="card-text">${data[0].launch_year}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
}

getData()