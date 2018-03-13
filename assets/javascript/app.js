// Side Nav Bar - Initialize collapse button
$(".button-collapse").sideNav();

$(document).ready(function() {
    $('.parallax').parallax();
    $('select').material_select();
});

// index java

$("#download-button").on("click", function(event) {

    event.preventDefault();
    search()

});

function search() {
    var searchTerm = $("#puppers").val();

    var queryURL = "https://api.petfinder.com/pet.getRandom?format=json&key=9da4a66757d1c617a44a579e1b05eabd&arg1=foo";



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
    }).catch(function(err) {
        console.log(err)

    })
    $("#pet-choose").empty();
    $("#button-row").empty();
    var petPicture = $("<div class='col s6' id='pet-pic'></div>")
    var petInfo = $("<div class='col s6' id='pet-info'></div>")
    $("#pet-choose").append(petPicture, petInfo)
    $("#button-row").append("<a href = '#'id = 'info-button'class = 'btn-large waves-effect waves-light orange'>More Information</a>")
    $("#button-row").append("<a href = '#'id = 'next-button'class = 'btn-large waves-effect waves-light orange'>Next Pet</a>")
}
$(document).on('click', '#info-button', function() {
    $("#pet-info").empty();

})
$(document).on('click', '#next-button', function() {
    $("#pet-info").empty();

})


$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBgk9gIgJdoUNUBNVtMmjcTpyjrVaXcR8A",
        authDomain: "pick-a-pet.firebaseapp.com",
        databaseURL: "https://pick-a-pet.firebaseio.com",
        projectId: "pick-a-pet",
        storageBucket: "",
        messagingSenderId: "1099432899618"
    };
    firebase.initializeApp(config);
    var userId = 0;
    $('.parallax').parallax();
    // Side Nav Bar - Initialize collapse button
    $(".button-collapse").sideNav();
    var database = firebase.database();
    $(document).on('click', '#send-button', function() {
        userId++
        database.ref('contact/' + userId).set({
            FirstName: $("#first_name").val().trim(),
            LastName: $("#last_name").val().trim(),
            Email: $("#email").val().trim(),
            Message: $("#textarea1").val().trim()
        })
        $("#first_name").val('');
        $("#last_name").val('');
        $("#email").val('');
        $("#textarea1").val('');
    });
});
