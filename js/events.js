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
    $('#typing').on('keydown', function () {
        if (key.which === 71) {
            document.alert('The G key has been pressed');
        }
    });
}

function submitIt () {

}

$(document).ready(function(){

// call functions here
getIt();

});
