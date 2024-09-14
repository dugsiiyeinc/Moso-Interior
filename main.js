const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

const icon = document.getElementById('icon');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('show');

  if (menu.classList.contains('show')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
    console.log("a")
  } else {

    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

// active class

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelectorAll("nav ul li a").forEach((link) => {
      link.classList.remove("active");
    });
    console.log('aa')
    this.classList.add("active");
  });
});

// bg-js
const images = [
  'url("/images/im-1.jpg")',
  'url("/images/img-3.jpg")',
  'url("/images/img-4.jpg")',
];
images.forEach(image => {
  const img = new Image();
  img.src = image;
});

let index = 0;

function changeBackground() {
  setTimeout(() => {
    document.getElementById('bg-image').style.backgroundImage = images[index];
  }, 10); // 10 milliseconds

  index = (index + 1) % images.length; 
}

setInterval(changeBackground, 4000);

changeBackground();