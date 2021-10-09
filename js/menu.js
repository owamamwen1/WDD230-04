const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  // make all the click link show in mobile
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      //Toggle nav 
      nav.classList.toggle('nav-active');

      // animate links
      /*The action inside the text mobile */
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ''
          } else {
              link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
      });

      //Burger Animation
      burger.classList.toggle('toggle');
  });


}

navSlide();

// more function call

//const app = () => {
//    navSlide();
//}