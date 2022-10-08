const threeDot = document.querySelectorAll('#threeDot');

body.addEventListener('click', (e) => {
    removeActiveClass();
});

for (let dot of threeDot) {
    dot.addEventListener('click', (e) => {
        e.stopPropagation();
        dot.nextElementSibling.classList.toggle('active');
    })
}


function removeActiveClass() {
    for (let dot of threeDot) {
        dot.nextElementSibling.classList.remove('active');
    }
}














