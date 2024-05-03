window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#555'; /* Change background color when scrolled */
  } else {
    navbar.style.backgroundColor = '#333'; /* Revert back to initial background color */
  }
});
