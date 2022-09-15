'use strict ';
document.addEventListener('DOMContentLoaded', () => {
    
    const logInbutton = document.querySelector('.main-button');
    const modal = document.querySelector('.modal');
    const closeModal =document.querySelector('.modal-close');
    const modalForm =document.querySelector('.modal-form');
    const prewBtn = document.querySelector('.prew-button');
    const nextBtn = document.querySelector('.next-button');
    const slide = document.querySelectorAll('.slide');
    
    function modalOpen(){
        
        modal.classList.add('show');
        document.body.style.overflow = "hidden";
    }
    
    function modalClose(){
        
        modal.classList.remove('show');
        document.body.style.overflow = "";
    }
    logInbutton.addEventListener('click', () => {modalOpen();});
    
    closeModal.addEventListener('click', ()=> { modalClose();});
    
    modal.addEventListener('click', (event)=>{
        const target = event.target;
        if(target == modal){
            modalClose();
        }
    });
    
    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        modalForm.reset();
        modalClose();
    });
    
    
    const loadMoreButton = document.querySelector('.ourteam-button'),
        newCards = document.querySelectorAll('#hiden'),
        wrapperCard = document.querySelector('.cads-wrapper');
    
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
});