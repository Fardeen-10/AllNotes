const idDropDown = document.querySelector('#id-dropDrown');
const newDropDrown = document.querySelector('#new-dropDrown');
const profile = document.querySelector('#id');
const body = document.querySelector('body');
const addNew = document.querySelector('#new');
const dateEL = document.querySelector('#date');



const setDate = () => {
    const date = new Date();
    const dayOfWeekDigit = new Date().getDay();
    const dayOfWeekName = new Date().toLocaleString(
        'default', { weekday: 'long' }
    );
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]
    dateEL.innerText = `${dayOfWeekName} ,${months[month]} , ${day} ,${year} `;
}

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

setDate();














