export  function initAnimacaoScrollLeft(){
    const sections = document.querySelectorAll('[data-anime="scroll-left"]');
    const windowMetade = window.innerHeight * 0.6;
    
    function animaScroll(){
      sections.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
    
        if(sectionTop < 0){
          section.classList.add("ativo");
        }
      })
    }
    window.addEventListener("scroll", animaScroll);
  }

  export  function initAnimacaoScrollRight(){
    const sections = document.querySelectorAll('[data-anime="scroll-right"]');
    const windowMetade = window.innerHeight * 0.6;
    
    function animaScroll(){
      sections.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
    
        if(sectionTop < 0){
          section.classList.add("ativo");
        }
      })
    }
    
    window.addEventListener("scroll", animaScroll);
  }

  export  function initAnimacaoScrollUp(){
    const sections = document.querySelectorAll('[data-anime="scroll-up"]');
    const windowMetade = window.innerHeight * 0.85;
    
    function animaScroll(){
      sections.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
    
        if(sectionTop < 0){
          section.classList.add("ativo");
        }
      })
    }
    
    window.addEventListener("scroll", animaScroll);
  }

  export  function initAnimacaoScrollDown(){
    const sections = document.querySelectorAll('[data-anime="scroll-down"]');
    const windowMetade = window.innerHeight * 0.6;
    
    function animaScroll(){
      sections.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
    
        if(sectionTop < 0){
          section.classList.add("ativo");
        }
      })
    }
    
    window.addEventListener("scroll", animaScroll);
  }

