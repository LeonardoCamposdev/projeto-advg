import outsideCLick from "./outsideClick.js";
export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]"); //NODELIST

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");

    outsideCLick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}


