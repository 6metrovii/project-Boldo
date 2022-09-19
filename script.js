'use strict ';
document.addEventListener('DOMContentLoaded', () => {
    
    const logInBtn = document.querySelector('.main-button'),
          modal = document.querySelector('.modal'),
          closeModal =document.querySelector('.modal-close'),
          modalForm =document.querySelector('.modal-form'),
          loadMoreButton = document.querySelector('.ourteam-button'),
          newCards = document.querySelectorAll('#hiden'),
          wrapperCard = document.querySelector('.cads-wrapper'),           
          prewBtn = document.querySelector('.prew-button'),
          nextBtn = document.querySelector('.next-button'),
          slidesField = document.querySelector('.slides-inner'),
          widthSlides = slidesField.offsetWidth,
          slides = document.querySelectorAll('.slides'),
          slide = document.querySelectorAll('.slide'); 
          let offset = 0;
    
    if(localStorage.getItem('user') === "true"){
        logInBtn.classList.add('login-btn');
        logInBtn.innerHTML = 'Hello user !';
    }
    
    function modalOpen(){
    
        modal.classList.add('show');
        document.body.style.overflow = "hidden";
    }
    
    function modalClose(){
    
        modal.classList.remove('show');
        document.body.style.overflow = "";
    }
    
    logInBtn.addEventListener('click', () => {modalOpen();});
    
    closeModal.addEventListener('click', ()=> { modalClose();});
    
    modal.addEventListener('click', (event)=>{
    
        const target = event.target;
        if(target == modal){
            modalClose();
        }
    });
    
    modalForm.addEventListener('submit', (event) => {
        modalForm.reset();
        modalClose();
        localStorage.setItem('user', 'true');
        if(localStorage.getItem('user') === "true"){
            logInBtn.classList.add('login-btn');
            logInBtn.innerHTML = 'Hello user !';
        }
    });
    
    function loadMoreCards() {
    
        newCards.forEach((item) => {
            item.classList.toggle('hiden');
            item.classList.toggle('show');
        });
        wrapperCard.classList.toggle('wrap');
    
    }
    
    loadMoreButton.addEventListener('click', () => {
        loadMoreCards();
    });
    
    slidesField.style.width = 100 * slides.length + '%';  
    slidesField.style.transition = '0.8s all';            
    
    slides.forEach(item => {
        item.style.width = widthSlides;  
    });
    
    nextBtn.addEventListener('click', () => {    
        if(offset === widthSlides * (slides.length -1)){      
            offset = 0;                       
        }else{
            offset += widthSlides; 
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    });
    
    prewBtn.addEventListener('click', () => {    
        if(offset === 0){        
            offset = widthSlides * (slides.length -1);  
        }else{
            offset -= widthSlides; 
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    });
    
    slide.forEach(item => item.addEventListener('click', (e) => {
        if(e.target == item){
            slide.forEach(item => item.classList.remove('active-slide'));
            item.classList.add('active-slide');
        }
    }))
    
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
        return false;
    });
});