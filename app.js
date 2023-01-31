console.log("app.js begin");

const NUM_PIXELS_IN_ROW = 20;
const PIXEL_WIDTH = 50;

// get reference to grid holder
const canvas = document.querySelector(".canvas");
const controls = document.querySelector(".controls");
const colorInput = document.createElement("input");
controls.appendChild(colorInput);

canvas.style.width = PIXEL_WIDTH * NUM_PIXELS_IN_ROW + "px";

for (let i = 0; i < NUM_PIXELS_IN_ROW ** 2; i++) {
  const pixel = document.createElement("button");
  //const txt = document.createElement("INPUT")
  // style pixels in the canvas with a .pixel clas
  pixel.className = "pixel";
  pixel.style.width = PIXEL_WIDTH + "px";
  pixel.style.height = PIXEL_WIDTH + "px";
  canvas.append(pixel);
}

let colorSelection = "red";

const pixels = document.querySelectorAll(".pixel");
for (pixel of pixels) {
  console.log("creating event listener for pixel: " + pixel);
  pixel.addEventListener("click", (event) => {
    const clicked = event.target;
    clicked.style.background = colorSelection;
  });
}
//define a function called draw that invokes the brush func with a certain action
function draw() {
  if ("mousedown") {
    brush();
  } else {
    return;
  }
}

// create brush
function brush() {
  stroke(0, 0, 0, 255);
  strokeWeight(2);
  // draw a line from current mouse point to previous mouse point
  line(mouseX, mouseY, pmouseX, pmouseY);
}

// make palette - start with blue color
const colorChoice = document.createElement("div");
colorChoice.className = "color-picker";
colorChoice.style.background = "blue";
controls.append(colorChoice);

colorChoice.addEventListener("click", (event) => {
  colorSelection = "blue";
  //alert('your current selection is the color blue')
  colorInput.setAttribute("value", colorSelection);
});

//make palette with yellow
const colorChoice2 = document.createElement("div");
colorChoice2.className = "color-picker";
colorChoice2.style.background = "yellow";
controls.append(colorChoice2);

colorChoice2.addEventListener("click", (event) => {
  colorSelection = "yellow";
  colorInput.setAttribute("value", colorSelection);
});
//make palette with color orange
const colorChoice3 = document.createElement("div");
colorChoice3.className = "color-picker";
colorChoice3.style.background = "orange";
controls.append(colorChoice3);

colorChoice3.addEventListener("click", (event) => {
  colorSelection = "orange";
  colorInput.setAttribute("value", colorSelection);
});
//make palette with color green
const colorChoice4 = document.createElement("div");
colorChoice4.className = "color-picker";
colorChoice4.style.background = "green";
controls.append(colorChoice4);

colorChoice4.addEventListener("click", (event) => {
  colorSelection = "green";
  colorInput.setAttribute("value", colorSelection);
});
//make palette with color purple
const colorChoice5 = document.createElement("div");
colorChoice5.className = "color-picker";
colorChoice5.style.background = "purple";
controls.append(colorChoice5);

colorChoice5.addEventListener("click", (event) => {
  colorSelection = "purple";
  colorInput.setAttribute("value", colorSelection);
});
//make palette with color brown
const colorChoice6 = document.createElement("div");
colorChoice6.className = "color-picker";
colorChoice6.style.background = "saddlebrown";
controls.append(colorChoice6);

colorChoice6.addEventListener("click", (event) => {
  colorSelection = "saddlebrown";
  colorInput.setAttribute("value", colorSelection);
});

//make palette with color grey
const colorChoice7 = document.createElement("div");
colorChoice7.className = "color-picker";
colorChoice7.style.background = "grey";
controls.append(colorChoice7);

colorChoice7.addEventListener("click", (event) => {
  colorSelection = "grey";
  colorInput.setAttribute("value", colorSelection);
});

//make palette with color black
const colorChoice8 = document.createElement("div");
colorChoice8.className = "color-picker";
colorChoice8.style.background = "black";
controls.append(colorChoice8);

colorChoice8.addEventListener("click", (event) => {
  colorSelection = "black";
  colorInput.setAttribute("value", colorSelection);
});

//make palette with color white
const colorChoice9 = document.createElement("div");
colorChoice9.className = "color-picker";
colorChoice9.style.background = "white";
controls.append(colorChoice9);

colorChoice9.addEventListener("click", (event) => {
  colorSelection = "white";
  colorInput.setAttribute("value", colorSelection);
});
