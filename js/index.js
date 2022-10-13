// window.addEventListener("resize", deleteGrey);

function deleteGrey() {
  const element = document.getElementById("container");
  let elementSize = element.clientWidth;

  if (elementSize > 767) {
    element.classList.add("grey", "darken-1");
  } else {
    element.classList.remove("grey", "darken-1");
  }

//   console.log(elementSize);
}

// deleteGrey()

window.addEventListener("resize", deleteGrey);
window.addEventListener("load", deleteGrey);
