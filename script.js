const body = document.querySelector('body');




//making tile appears visibly//
function populateBoard(size) {
    let tile = document.querySelector('.tile');
    tile.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //would have used 'repeat(16, 1fr)' but backtick repeat allows u to change size//
    tile.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i=0; i <256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'pink';
    tile.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16); //this would allow 16 by 16.


//change size by inputting//
function changeSize(input) {
    populateBoard(input);
}

const div = body.querySelector('div');


