const buttonShowForm = document.getElementById('button-show-form');
const buttonClearForm = document.getElementById('button-clear-form');
const form = document.getElementById('form');
const blackBackground = document.getElementById('background');

buttonShowForm.addEventListener('click', showForm);
buttonClearForm.addEventListener('click', clearForm);
blackBackground.addEventListener('click', clearFormBg);

function showForm(e) {
    e.preventDefault();
    this.classList.add('d-none');
    this.nextElementSibling.classList.add('d-none');
    form.classList.remove('d-none');
    blackBackground.classList.remove('d-none');
}
function clearForm(e) {
    e.preventDefault();
    buttonShowForm.classList.remove('d-none');
    this.parentElement.nextElementSibling.nextElementSibling.classList.remove(
        'd-none'
    );
    form.classList.add('d-none');
    blackBackground.classList.add('d-none');
}
function clearFormBg() {
    buttonShowForm.classList.remove('d-none');
    this.classList.add('d-none');
    form.classList.add('d-none');
    this.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
        'd-none'
    );
}
