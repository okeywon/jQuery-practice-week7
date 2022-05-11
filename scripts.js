console.log('JS');

// DOM = Document Object Model

$(document).ready(onReady);

function onReady() {
    console.log("Let's do this!");

    let titleHeader = $('h1');
    // let titleHeader = <h1></h1>
    console.log('titleheader is:', titleHeader); //ALWAYS LOG THESE - helpful for debugging.
    // console.log the h1 'titleheader'
}