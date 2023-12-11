console.log("Hello");

// grids

const grid = document.querySelector(".container");

//16x16 grid
function grids () {
    let number = 16;
    number *= 16;

    for(let i = 1; i <= number; i++) {
        const childDivs = document.createElement("div");

        childDivs.addEventListener('mousedown', () => {
          //childDivs.style.backgroundColor = "red";

            childDivs.addEventListener('mousemove', () => {
            childDivs.style.backgroundColor = "red"; 

      })        
    });
        grid.appendChild(childDivs);
    }

    //document.querySelector("divs");

   
}
grids();

//game reset button

const buttons = document.createElement("button");
buttons.textContent = "Clear Board";

// /Board reset button
buttons.addEventListener('click', () => {
  clearBoard();
})
//Board cleaner
function clearBoard () {
  const gDivs = document.querySelectorAll(".container > div");
  gDivs.forEach((grids) => {
    grids.style.backgroundColor = "black";
});

}



grid.appendChild(buttons);
