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
    topLeft: 20,
    topRight: 3,
    bottomRight: 40,
    bottomLeft: 10,
  };
  customBorderRadius(bordersRadius);
}
