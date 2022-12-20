'use strict'
const modalContainer= document.querySelector('.modal__container');
const modal = document.querySelector('.modal')
const completedModal = document.querySelector('.completed')
const closeBtn = document.querySelector('.close-modal');
const projects = document.querySelectorAll('.modal__project')
const inputs = document.querySelectorAll('.modal__input');
const openBtns = document.querySelectorAll('.open-modal')
console.log(completedModal);
const closeModal = () => {
    modalContainer.classList.add('hidden')
}
const openModal = () => {
    modalContainer.classList.remove('hidden')
    modal.classList.remove('hidden');
    completedModal.classList.add('hidden')
}
const changeSelectedProject = (curEl) => {
    const selectedProject = document.querySelector('.active');
        const clickedProject = curEl.closest('.modal__project');
        if(selectedProject) {
            selectedProject.classList.remove('active');
            clickedProject.classList.add('active')
            return;
        }
        clickedProject.classList.add('active')
       
}
inputs.forEach(input => {
    input.addEventListener('click',e => {
      changeSelectedProject(e.target)        
})
})
openBtns.forEach( btn => {
    btn.addEventListener('click', e => {
        //Findin gthe project so that i can check that input
        const itemNum = e.target.dataset.item;
        const input = inputs[+itemNum];
        input.checked = true;
        changeSelectedProject(input)
        openModal()
    })
})
closeBtn.addEventListener('click', closeModal)

