const backgroundImage = [
  `url('https://images.pexels.com/photos/3845077/pexels-photo-3845077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
  `url('https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
  `url('https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
  `url('https://images.pexels.com/photos/3482719/pexels-photo-3482719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
  `url('https://i.ytimg.com/vi/XOxJwTxrIX4/maxresdefault.jpg')`,
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
