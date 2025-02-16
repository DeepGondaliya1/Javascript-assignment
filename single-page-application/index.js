const backgroundImage = [
  `url('https://img.freepik.com/free-vector/egyptian-desert-with-river-pyramids-night_107791-4618.jpg?t=st=1739713719~exp=1739717319~hmac=608e037fee8b277cf805b44de82597e0e331681d31a70f46a11cec6dcbec4957&w=1380')`,
  `url('https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?t=st=1739713401~exp=1739717001~hmac=1088907190ea74b5a80e11924093849c462b217ed9e86944b46b9a78122408e0&w=1380')`,
  `url('https://img.freepik.com/free-vector/wild-desert-landscape-night-scene_1308-52214.jpg?t=st=1739713862~exp=1739717462~hmac=26b14b690568cd8bc1d1ff1199aab767893935ff4e490378da4d2bd0fb1f8494&w=1380')`,
  `url('https://img.freepik.com/free-vector/bedouins-walk-egypt-pyramids-camel-night-desert_107791-4619.jpg?t=st=1739713754~exp=1739717354~hmac=8dd78ea4381eae0e09b723ce511e4d0f5a127effc400cf167fd70b77012df74c&w=1380')`,
  `url('https://img.freepik.com/premium-photo/dream-desktop-wallpaper_941097-164233.jpg?w=1060')`,
];

let currentImage = 0;

const imageContainer = document.getElementById("home-page");
console.log(imageContainer);

function updateImage() {
  imageContainer.style.backgroundImage = backgroundImage[currentImage];
}

document.getElementById("left-slider").addEventListener("click", () => {
  currentImage =
    (currentImage - 1 + backgroundImage.length) % backgroundImage.length;
  updateImage();
});

document.getElementById("right-slider").addEventListener("click", () => {
  currentImage =
    (currentImage + 1 + backgroundImage.length) % backgroundImage.length;
  updateImage();
});

updateImage();


// smooth scrolling for navigation 

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({behavior: "smooth"});
  });
});