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

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelectorAll("a").forEach((link) => {
      link.classList.remove("active");
    });
    console.log('aa')
    this.classList.add("active");
  });
});
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor click behavior

      // Remove active class from all links
      document.querySelectorAll("a").forEach((link) => {
          link.classList.remove("active");
      });

      // Add active class to the clicked link
      this.classList.add("active");

      // Get the target section based on the href attribute
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Smooth scroll to the target section if it exists
      if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
      }

      // Optionally navigate to the section after scrolling (if needed)
      // Remove this line if you want to avoid changing the URL hash
      window.history.pushState(null, null, targetId);
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