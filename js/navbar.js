let hamburgerIsOpen = false;
let hamburgerNavContainer = document.getElementById("hamburger-nav-container");

const openHamburger = () => {
  if (!hamburgerIsOpen) {
    hamburgerNavContainer.style.display = "block";
    hamburgerIsOpen = true;
  } else {
    hamburgerNavContainer.style.display = "none";
    hamburgerIsOpen = false;
  }
};

window.addEventListener("resize", () => {
  let lebarLayar =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (lebarLayar > 576) {
    hamburgerNavContainer.style.display = "none";
    hamburgerIsOpen = false;
  }
});