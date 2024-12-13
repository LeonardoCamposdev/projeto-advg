export default function initEscritorioCarrosel(){
    const imgs = document.querySelector(".container-carrosel");
    const img = document.querySelectorAll(".container-carrosel img");

    let idx = 0;
  
    function carrosel() {
      idx++;
  
      if (idx > img.length - 1) {
        idx = 0;
      }
  
      imgs.style.transform = `translateX(${-idx * 100}%)`;
    }
  
    setInterval(carrosel, 1800);
  }
  