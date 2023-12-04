console.log("Hello");

// grids

const grid = document.querySelector(".container");

//16x16 grid
function grids () {
    let number = 16;

    for(let i = 1; i <= number; i++) {
        const divs = document.createElement("div");
        grid.appendChild(divs);
    }
}

grids();
