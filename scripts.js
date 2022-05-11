console.log('JS');

//COPY AND PASTE ALL SELECTORS / IDs / CLASSES so you don't typo!

// DOM = Document Object Model
// 1 Selectors - element to pass into an element, etc.
// 2 Traversal - in an element, how to get to it's parent, etc.
// 3 DOM Manipulation - have an element and want to do something with it,  or add more to DOM, etc.
// 4 Events - I clicked a button and want it to do something now, etc.

// classes and ids can be created inside either index.html or scripts.js
//   ---- both can be accessed by the DOM ----

// may need .addClass function
// may need prepend
// may need animations
// will need traversing --- I'm guessing from Edan's lengthy explanation
// NO AJAX YET!

// .val gets things from the DOM

// can use jquery to get the value of an element --- looks important

$(document).ready(onReady);

function onReady() {
    console.log("Let's do this!");

    let titleHeader = $('h1');
    // let titleHeader = <h1></h1>
    console.log('titleheader is:', titleHeader); //ALWAYS LOG THESE - helpful for debugging.
    // console.log the h1 'titleheader'

    let allListItems = $('li');
    console.log('li elements', allListItems);

    let justThatOneListItem = $('#maddam-li-element');
    justThatOneListItem
        .text('DOM Manipulation')
        .css('font-weight', 'bold')
        .css('transform', 'rotate(-45deg)');

    $('.first-and-last').css('color', 'blue');

    $('.every-Other').css('background-color', 'pink');

    $('ul').append(`'
        <li>
            Forms
            <button class="alienButton">Alien</button>
        </li>'`);

    $('#theButton').on('click', whenIClickTheButton);
}

function whenIClickTheButton(){ // these things only happen on button click
    console.log('someone clicked me!');
    $('li').last().remove();

    let titleText = $('h1').text();  // text here is a getter
    console.log('Title Text is:', titleText);

    let louderTitleText = titleText.toUpperCase();
    $('h1').text(louderTitleText);   // text here is a setter
}