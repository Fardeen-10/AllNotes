const mainTitle = document.querySelector('#main-title');
const mianDescription = document.querySelector('#main-description');
const exampleTitle = document.querySelector('#example-title');
const exampleDescription = document.querySelector('#example-description');
const resetButton = document.querySelector('#reset')
const title = 'Example Note';

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since the 1500s, when";

mainTitle.addEventListener('keyup', changeExampleNoteTitle)

mianDescription.addEventListener('keyup', changeExampleNoteDescription)

resetButton.addEventListener('click', resetData)


function changeExampleNoteTitle(e) {
    if (mainTitle.value.trim().length === 0) {
        resetExampleNote('title');
    }
    if (mainTitle.value.trim().length > 0) {
        fillExampleNote('title');
    }
}

function changeExampleNoteDescription() {
    if (mianDescription.value.length === 0) {
        resetExampleNote('description');
    }
    if (mianDescription.value.length > 0) {
        fillExampleNote('description');
    }
}


function resetExampleNote(main) {
    if (main === 'title') {
        exampleTitle.innerText = '';
        exampleTitle.innerText = title;
        return
    }
    else if (main === 'description') {
        exampleDescription.innerText = '';
        exampleDescription.innerText = description;
    }
}

function fillExampleNote(main) {
    if (main === 'title') {
        exampleTitle.innerText = mainTitle.value;
    }
    else if (main === 'description') {
        exampleDescription.innerText = '';
        exampleDescription.innerText = mianDescription.value;
    }
}


function resetData() {
    mainTitle.value = '';
    mianDescription.value = '';
    exampleTitle.innerText = title;
    exampleDescription.innerText = description;
}


function reStart() {
    exampleTitle.innerText = mainTitle.value;
    exampleDescription.innerText = mianDescription.value;

}

reStart()