const box = document.getElementById("box");

function customBordersRadius(bordersRadius) {
  const { topLeft, topRight, bottomLeft, bottomRight } = bordersRadius;
  box.style.borderTopLeftRadius = `${topLeft[0]}% ${topLeft[1]}%`;
  box.style.borderTopRightRadius = `${topRight[0]}% ${topRight[1]}%`;
  box.style.borderBottomRightRadius = `${bottomRight[0]}% ${bottomRight[1]}%`;
  box.style.borderBottomLeftRadius = `${bottomLeft[0]}% ${bottomLeft[1]}%`;
}

function handleClick(e) {
  e.preventDefault();
  const rangeTop = document.getElementById("top").value;
  const rangeRight = document.getElementById("right").value;
  const rangeBottom = document.getElementById("bottom").value;
  const rangeLeft = document.getElementById("left").value;

  const bordersRadius = {
    topLeft: [rangeTop, 100 - rangeLeft],
    topRight: [100 - rangeTop, rangeRight],
    bottomRight: [100 - rangeBottom, 100 - rangeRight],
    bottomLeft: [rangeBottom, rangeLeft],
  };
  customBordersRadius(bordersRadius);
}
