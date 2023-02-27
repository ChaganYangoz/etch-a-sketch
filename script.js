let count=0;
const container = document.getElementById("container");
const btn = document.querySelector('#reset');
const apply=document.querySelector('#apply');

let mouseDown = false;
container.onmousedown = () => mouseDown = true;
container.onmouseup = () => mouseDown = false;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    let size = 250 / pixel;
    count++;
    cell.style.padding = size + 'px';
    cell.addEventListener("mousedown", changeColor);
    cell.addEventListener("mouseover", changeColor);
   /* cell.addEventListener('click', function (e) {
      e.target.style.background = 'black';
    });*/
    container.appendChild(cell).className = "grid-item";
  };
};

btn.onclick = () => document.location.reload();
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.style.fontSize="20px";
output.innerHTML = slider.value+"x"+slider.value;
let pixel=slider.value;

slider.oninput = function() {
  output.innerHTML = this.value+"x"+this.value;
  pixel = this.value;
}
 apply.onclick=()=> {
  deleteRows(count);
  count=0;
  makeRows(pixel, pixel);
}

function deleteRows(count){
  for(let i=0;i<count;i++){
    document.querySelector(".grid-item").remove();
  } 
}

function changeColor(e){
  if (e.type == "mouseover" && !mouseDown) return;

  e.target.style.backgroundColor = "black";
}

makeRows(pixel, pixel);

