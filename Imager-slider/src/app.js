// // api
// const endpoint =
//   "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const sliders = [
  {
    id: 1,
    caption: "Hill Text",
    img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
  },
  {
    id: 2,
    caption: "Snow Text",
    img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
  },
  {
    id: 3,
    caption: "Nature Text",
    img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
  },
  {
    id: 4,
    caption: "Snow Text",
    img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
  },
  {
    id: 5,
    caption: "Nature Text",
    img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
  },
];

window.onload = () => {
  main();
};

// global
let slideIndex = 0;

function main() {
  const sliderImg = document.getElementById("slider-img");
  const caption = document.getElementById("caption");
  const leftNumber = document.querySelector(".leftNum");
  const rightNumber = document.querySelector(".rightNum");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // default slideshow
  slideShow(sliderImg, leftNumber, rightNumber, caption);

  nextBtn.addEventListener("click", function () {
    slideIndex++;
    if (slideIndex > sliders.length - 1) {
      slideIndex = 0;
    }
    slideShow(sliderImg, leftNumber, rightNumber, caption);
  });
  prevBtn.addEventListener("click", function () {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = sliders.length - 1;
    }
    slideShow(sliderImg, leftNumber, rightNumber, caption);
  });

  setInterval(function () {
    slideIndex++;
    if (slideIndex > sliders.length - 1) {
      slideIndex = 0;
    }
    slideShow(sliderImg, leftNumber, rightNumber, caption);
  }, 3000);
}

function slideShow(sliderImg, leftNumber, rightNumber, caption) {
  const item = sliders[slideIndex];
  sliderImg.src = item.img;
  leftNumber.textContent = item.id;
  rightNumber.textContent = sliders.length;
  caption.textContent = item.caption;

  // show indicator
  showIndicator();
}

function showIndicator() {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.classList.remove("hl");
  });
  items[slideIndex].classList.add("hl");
}

// create indicator dynamically
function createIndicator() {
  const indicator = document.querySelector(".indicator");
  const html = sliders
    .map((slider) => {
      return `
   <!-- single indicator -->
    <button
    class="item h-4 w-4 rounded-full bg-gray-400 transition-all hover:bg-gray-600"
  ></button>`;
    })
    .join("");
  indicator.innerHTML = html;
}
createIndicator();
