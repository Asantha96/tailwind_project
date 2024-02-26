const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    hamburgerBtn.classList.toggle('toggle-btn');
  }
  hamburgerBtn.addEventListener('click',toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded',initApp); //initApp is called after loaded the dom, else if not that, causes error, event listener is running after adding dom