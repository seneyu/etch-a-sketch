const container = document.querySelector(".container");
const form = document.getElementById("form");
const gridSizeInput = document.getElementById("gridSizeInput");

function createGrid(num) {
  container.textContent = "";
  for (let i = 0; i < num; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < num; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid");
      row.appendChild(cell);
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const gridSize = gridSizeInput.value;
  createGrid(gridSize);
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => rainbow(grid));
  });
});

function changeColor(grid, color) {
  grid.style.backgroundColor = color;
}

function rainbow(grid) {
  const r = Math.floor(Math.random() * 225) + 1;
  const g = Math.floor(Math.random() * 225) + 1;
  const b = Math.floor(Math.random() * 225) + 1;
  grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
