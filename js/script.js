console.log("Hello");

// grids

const grid = document.querySelector(".container");

//16x16 grid
function grids () {
    let number = 16;
    number *= 16;

    for(let i = 1; i <= number; i++) {
        const childDivs = document.createElement("div");

        childDivs.addEventListener('mouseover', () => {
            childDivs.style.backgroundColor = "red";
        });
        grid.appendChild(childDivs);
    }

    //document.querySelector("divs");

   
}
grids();

//game reset button
const buttons = document.createElement("button");
buttons.textContent = "Reset Game";
const gDivs = document.querySelector(".container > div");

buttons.addEventListener('click', (button) => {

    
    location.reload();
})
grid.appendChild(buttons);