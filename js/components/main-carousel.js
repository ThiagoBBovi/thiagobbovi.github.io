let pixels = 0;
function btnRight() {
  let element = document.querySelector(".elements");
  pixels = pixels + 200;
  element.style = `transform: translateX(${pixels}px)`;
}

function btnLeft() {
  let element = document.querySelector(".elements");
  pixels = pixels - 200;
  element.style = `transform: translateX(${pixels}px)`;
}
