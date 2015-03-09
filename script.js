
$(function (){
    
    function storeValues() {

    if (localStorage["fname"]) {
        $('#fname').val(localStorage["fname"]);
    }

    if (localStorage["lname"]) {
        $('#lname').val(localStorage["lname"]);
    }

    if (localStorage["email"]) {
        $('#email').val(localStorage["email"]);
    }

    if (localStorage["message"]) {
        $('#message').val(localStorage["message"]);
    }
    }

    storeValues();

    $('.text').keyup(function () {
        localStorage[$(this).attr('name')] = $(this).val();
    });

    $('#localStorageForm').submit(function() {
        localStorage.clear();
    });

});

