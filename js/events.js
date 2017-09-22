//define functions here
function getIt () {
    $('p').on('click', function () {
        document.alert('Hey!');
    });
}

function frameIt () {
    $('img').on('load', function () {
        $('img').addClass('tasty');
    });
}

function pressIt () {
    
}

function submitIt () {

}

$(document).ready(function(){

// call functions here
getIt();

});
