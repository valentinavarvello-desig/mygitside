function loadCars(){

    fetch("js/data.json")

    .then(res => res.json())

    .then(cars => {

        document.querySelector(".section").innerHTML =
        cars.map((car) =>   `<div class="card"><h2>${car.name}</h2><p>Year: ${car.year}</p><p>Origin: ${car.origin}</p> </div> `).join("");

    });

}

function changeTheme(){

    document.body.classList.toggle("dark");

}

document
.querySelector(".btn")
.addEventListener("click", loadCars);

document.querySelector(".btn_styles").addEventListener("click", changeTheme);