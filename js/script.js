// grids
let defaultSize = 16;
const grid = document.querySelector(".container");

//grid size picker

const slider = document.querySelector("#slider");
const sliderValue = document.querySelector(".slider > label");
sliderValue.textContent = `${slider.value} x ${slider.value}`;

slider.addEventListener('input', () => {
  sliderValue.textContent = `${slider.value} x ${slider.value}`;
  let newSize = slider.value;
  defaultSize = newSize;
  clearBoard();
  grids(newSize);

  
})

//Color picker

const bgColor = document.querySelector("#bg-color");
const penColor = document.querySelector("#pen-color");


//16x16 grid
function grids (size) {

    for(let i = 1; i <= size*size; i++) {
        const childDivs = document.createElement("div");
        childDivs.style.backgroundColor = "black";
       
        //background color picker
        bgColor.addEventListener('input', () => {
          childDivs.style.backgroundColor = bgColor.value;
        })
        

        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
        
        grid.appendChild(childDivs);
    }

    // only draw when mouse key is held.
        let isMouseDown = false;
        grid.addEventListener('mousedown', function(e) {
          isMouseDown = true;
          e.target.style.backgroundColor = penColor.value;

        });

        grid.addEventListener('mouseup', function(e) {
          isMouseDown = false;

        });

        grid.addEventListener('mouseover', function(e) {
          
          if (isMouseDown) {
            e.target.style.backgroundColor = penColor.value;
          }

        });
  
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
    grids.style.backgroundColor = bgColor.value;
    
})

}
