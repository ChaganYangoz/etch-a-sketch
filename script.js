const container = document.getElementById("container");

const btn=document.querySelector('#reset');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    let size=250/pixel;
    cell.style.padding=size+'px';
    cell.addEventListener('click', function (e) {
      e.target.style.background = 'black';
    });
    container.appendChild(cell).className = "grid-item";
  };
};

btn.onclick=()=>document.location.reload();

let pixel=prompt("mad!");

makeRows(pixel, pixel);



