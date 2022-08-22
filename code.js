const box = document.getElementById("box");
const btnCopy = document.querySelector('.btn-copy')
const printElement = document.querySelector(".print-element");

function customBordersRadius(bordersRadius) {
  const { topLeft, topRight, bottomLeft, bottomRight } = bordersRadius;
  const borderRadius = `${topLeft[0]}% ${topRight[0]}% ${bottomRight[0]}% ${bottomLeft[0]}% / ${topLeft[1]}% ${topRight[1]}% ${bottomRight[1]}% ${bottomLeft[1]}%`;
  box.style.borderRadius = borderRadius;
  btnCopy.style.borderRadius = borderRadius;
  writeToDOM(printElement, borderRadius);
}

function writeToDOM(element, content) {
  element.innerHTML = `border-radius: ${content};`;
}

function handleClick(e) {
  e.preventDefault();
  const rangeTop = document.getElementById("top").value;
  const rangeRight = document.getElementById("right").value;
  const rangeBottom = document.getElementById("bottom").value;
  const rangeLeft = document.getElementById("left").value;
  console.log({ rangeTop, rangeRight, rangeBottom, rangeLeft });
  const bordersRadius = {
    topLeft: [rangeTop, 100 - rangeLeft],
    topRight: [100 - rangeTop, rangeRight],
    bottomRight: [100 - rangeBottom, 100 - rangeRight],
    bottomLeft: [rangeBottom, rangeLeft],
  };
  customBordersRadius(bordersRadius);
}
