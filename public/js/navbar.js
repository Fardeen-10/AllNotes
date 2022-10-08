const idDropDown = document.querySelector('#id-dropDrown');
const newDropDrown = document.querySelector('#new-dropDrown');
const profile = document.querySelector('#id');
const body = document.querySelector('body');
const addNew = document.querySelector('#new');
const dateEL = document.querySelector('#date');



body.addEventListener('click', () => {
    if (idDropDown.classList.contains('active')) {
        idDropDown.classList.remove('active');
    }
    if (newDropDrown.classList.contains('active')) {
        newDropDrown.classList.remove('active')
    }
});


profile.addEventListener('click', (e) => {
    idDropDown.classList.toggle('active');
    e.stopPropagation();
});


addNew.addEventListener('click', (e) => {
    newDropDrown.classList.add('active');
    e.stopPropagation();
});