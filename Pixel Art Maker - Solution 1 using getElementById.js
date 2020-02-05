//---->"use strict";
//defines variable locations using jQuery $ in place of 'document.querySelector'
//  seems the definitions also serve to id the location of where code should go
//  this way the grid is placed under Design grid and not in place of the submit area

const $tableElement = document.getElementById('pixelCanvas');
const $inputHeight = document.getElementById('inputHeight');
const $inputWidth = document.getElementById('inputWidth');
const $colorPicker = document.getElementById('colorPicker');

//create function to capture submission
//remove the default value from populating after every submission click
//defines h & w pulling the values entered during submission
// clears $tableElement
// calls makeGrid & EventListener functions

document.getElementById('sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.value();
    let height = $inputHeight.value();

    $tableElement.html(''); //clear

    makeGrid(height, width);
    addCellClickListener();
});

//defines makeGrid function with params h & w
//does not use nested for loops for td & try


function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        document.getElementById('tr').append('<td></td>');
    };
};

function addCellClickListener() {
    document.getElementById('td').click( event => {
        let color = $colorPicker.value();
        document.getElementById(event.currentTarget).css("background-color", color)
    });
};
