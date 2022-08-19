const box = document.getElementById("box");

function customBorderRadius(bordersRadius) {
  const { topLeft, topRight, bottomLeft, bottomRight } = bordersRadius;
  box.style.borderTopLeftRadius = `${topLeft}px`;
  box.style.borderTopRightRadius = `${topRight}px`;
  box.style.borderBottomRightRadius = `${bottomRight}px`;
  box.style.borderBottomLeftRadius = `${bottomLeft}px`;
}

function handleClick(e) {
  e.preventDefault();

  const bordersRadius = {
    topLeft: document.getElementById("top-left").value,
    topRight: document.getElementById("top-right").value,
    bottomRight: document.getElementById("bottom-right").value,
    bottomLeft: document.getElementById("bottom-left").value,
  };
  customBorderRadius(bordersRadius);
}
