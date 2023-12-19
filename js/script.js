console.log("Hello");

// grids
let defaultSize = 16;
const grid = document.querySelector(".container");



//grid size picker

const gridValue = document.querySelector("#grid-size");
const gridSize = document.querySelector(".grid-size > label");
gridSize.textContent = `${gridValue.value} x ${gridValue.value}`;

const gridResizer = function () {
  
  
  gridValue.addEventListener('input', () =>{
    gridSize.textContent = `${gridValue.value} x ${gridValue.value}`;
    let newSize = gridValue.value;
    newSize =defaultSize;
  });

}
gridResizer();
//16x16 grid
function grids (size) {

  

    for(let i = 1; i <= size*size; i++) {
        const childDivs = document.createElement("div");
        childDivs.style.backgroundColor = "black";
        //childDivs.style.width = size;
        //childDivs.style.height = size;
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
        

        childDivs.addEventListener('mouseover', () => {
          childDivs.style.backgroundColor = "red";
        
    });
        grid.appendChild(childDivs);
    }

    //document.querySelector("divs");

   
}
grids(defaultSize);



//game reset button

const buttons = document.querySelector("#clear");

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

