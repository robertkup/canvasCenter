import "./styles.scss";
import { fabric } from "./fabric";
const buttonSpace = 50;
const app = document.querySelector("#app");
const canvas = new fabric.Canvas(app.querySelector("canvas"), {
  centeredScaling: true,
  width: getWidth(), // space for buttons (50)
  height: getHeight() - buttonSpace
});

var circle = new fabric.Circle({
  // left: canvas.width / 2, // space for buttons (50)
  // top: canvas.height / 2 - buttonSpace,
  width: 150,
  height: 150,
  radius: 120,
  lockScalingX: true,
  lockScalingY: true,
  fill: "green"
});

var circle2 = new fabric.Circle({
  // left: canvas.width / 2, // space for buttons (50)
  // top: canvas.height / 3 - buttonSpace,
  width: 50,
  height: 50,
  radius: 40,
  fill: "red"
});
// Adding it to the canvas
canvas.add(circle);
canvas.add(circle2);

go();
getWidth();
getHeight();
window.addEventListener("resize", go);

// return window height and width
function go() {
  document.querySelector(".width").innerText =
    document.documentElement.clientWidth;
  document.querySelector(".height").innerText =
    document.documentElement.clientHeight;

  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight - buttonSpace;
  if (!width && !height && !canvas) {
    return;
  }

  canvas.setWidth(width);
  canvas.setHeight(height);
  canvas.setDimensions({ width: width, height: height });

  var redRectLeft = canvas.width / 2 - circle2.width / 2;
  var redRectTop = canvas.height / 2 - circle2.height / 2;

  circle2.set({
    top: redRectTop,
    left: redRectLeft
  });

  // keep  position green circle center
  canvas.centerObject(circle);

  // Cropping canvas according to cropper rectangle
  //   if (canvas.getObjects().length > 0) {
  //     var i;
  //     for (i = 0; i < canvas.getObjects().length; i++) {
  //       var redRectLeft2 = canvas.width / 2 - canvas.getObjects()[i].left / 2;
  //       var redRectTop2 = canvas.height / 2 - canvas.getObjects()[i].top / 2;
  //       // console.log(canvas.getObjects()[i].type);
  //       if (canvas.getObjects()[i].type === "path") {
  //         canvas.getObjects()[i].left = redRectLeft2;
  //         canvas.getObjects()[i].top = redRectTop2;
  //         canvas.renderAll();
  //       }
  //     }
  //   }
}

function getWidth() {
  return document.documentElement.clientWidth;
}
function getHeight() {
  return document.documentElement.clientHeight;
}

// click on eraser button
app.querySelector("#eraser").addEventListener("click", (e) => {
  canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
  canvas.freeDrawingBrush.width = 10;
  canvas.isDrawingMode = !canvas.isDrawingMode;
  e.target.textContent = canvas.isDrawingMode ? "Erasing" : "Erase";
});
// click on draw button
app.querySelector("#draw").addEventListener("click", (e) => {
  canvas.freeDrawingBrush.color = "red";
  canvas.freeDrawingBrush.width = 10;
  canvas.freeDrawingBrush.freeDrawingCursor = "pointer";
  canvas.isDrawingMode = !canvas.isDrawingMode;
  e.target.textContent = canvas.isDrawingMode ? "drawing" : "draw";
});

// click on text button
app.querySelector("#text").addEventListener("click", (e) => {
  var text = new fabric.Textbox("de canvas test", {
    width: 450,
    height: 10,
    top: 100,
    left: 100
  });
  e.target.textContent = canvas.isDrawingMode ? "add text" : "text";
  canvas.add(text);
});
