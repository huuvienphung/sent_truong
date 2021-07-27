const showFilter = document.querySelector('.products__filter__showFilter');
const productsFilter = document.querySelector('.products__filter');
const doneFilter = document.querySelector('.products__filter__done');
console.log(showFilter);

showFilter.addEventListener('click', (e) => {
    e.preventDefault();
    productsFilter.classList.remove('d-none');
});
doneFilter.addEventListener('click', (e) => {
    e.preventDefault();
    productsFilter.classList.add('d-none');
});
