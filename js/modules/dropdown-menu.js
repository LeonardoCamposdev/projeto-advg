import outsideCLick from "./outsideClick.js";
export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]"); //NODELIST

  dropdownMenus.forEach((menu) => {
    ["click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    this.classList.add("active");

    outsideCLick(this, ["click"], () => {
      this.classList.remove("active");
    });
  }
}


