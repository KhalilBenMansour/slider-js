let right_arrow = document.querySelector(".slider--right-arrow");
let left_arrow = document.querySelector(".slider--left-arrow");
let slider = document.querySelector(".slider--wrapper-images");
let bottom = document.querySelector(".slider--bottom");
let btns = document.querySelectorAll(".slider-btn");

let l = slider.children.length;
let count = 0;
let width = 400;

function nextSlide() {
  for (let i = 0; i < l; i++) {
    slider.children[i].style.transform = `translateX(${-count * width}px)`;
  }
}
bottom.children[0].style.backgroundColor = "white";

right_arrow.addEventListener("click", function () {
  count++;
  if (count > l - 1) {
    count = 0;
    bottom.children[l - 1].style.backgroundColor = "transparent";
  } else {
    bottom.children[count - 1].style.backgroundColor = "transparent";
  }
  nextSlide();

  bottom.children[count].style.backgroundColor = "white";
});

left_arrow.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = l - 1;
    bottom.children[0].style.backgroundColor = "transparent";
  } else {
    bottom.children[count + 1].style.backgroundColor = "transparent";
  }
  nextSlide();
  bottom.children[count].style.backgroundColor = "white";
});
btns.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    bottom.children[count].style.backgroundColor = "transparent";
    count = i;
    bottom.children[i].style.backgroundColor = "white";
    nextSlide();
  })
);
