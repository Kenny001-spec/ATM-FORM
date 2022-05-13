'use-strict'
const ATMForm = document.getElementById('.ATMForm');
const overLay = document.getElementById('.overLay');
const btnForm = document.getElementById('.btnForm');

function btnForm() {
    ATMForm.classList.add('hidden');
    overLay.classList.add('hidden')
}

function btnFm() {
    ATMForm.classList.remove('hidden');
    overLay.classList.remove('hidden');
}
btnForm.addEventListener('click', () => {
    console.log('clicked');
    if (ATMForm.style.display === 'none') {

    }
})