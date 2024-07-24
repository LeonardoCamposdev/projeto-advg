export default function initFaq(){
  const perguntas = document.querySelectorAll("[data-faq]");

  perguntas[0].classList.add("active");
  perguntas[0].nextElementSibling.classList.add("active");
  function handleClick(event){
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }

  perguntas.forEach((pergunta) =>{
    pergunta.addEventListener("click",handleClick);
  })
}