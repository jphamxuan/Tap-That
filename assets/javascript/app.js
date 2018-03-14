<<<<<<< HEAD
var pfApiKey= "9da4a66757d1c617a44a579e1b05eabd" ;

var cat

// the next line and function set up the button in our html to be clickable and reactive 
document.addEventListener('DOMContentLoaded', bindButtons);
function bindButtons(){
    document.getElementById('submitZip').addEventListener('click', function(event){
        event.preventDefault();
        var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
        var url = 'http://api.petfinder.com/pet.find';
        
        $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",
            data: {
                key: pfApiKey,
                animal: 'cat',
                'location': zip,
                output: 'basic',
                format: 'json',
                count: '5'
            },
            success: function( response ) {
                console.log(response); // debugging
                for (var i = 0; i < response.petfinder.pets.pet.length; i++) {
                    cat= response.petfinder.pets.pet[i]
                    var catName= response.petfinder.pets.pet[i].name.$t
                    var catPhoto= cat.media.photos.photo[2].$t
                    var catSex= cat.sex.$t
                    var catDescription = cat.description.$t
                    var catMix = cat.mix.$t
                    var catAdd1 = cat.contact.address1.$t
                    var catAdd2 = cat.contact.address2.$t
                    var catEmail = cat.contact.email.$t
                    var catPhone = cat.contact.phone.$t
                    var catState = cat.contact.state.$t
                    var catZip = cat.contact.zip.$t
                    var catCity = cat.contact.city.$t
                    var catUpdate = cat.lastUpdate.$t
                    var catId = cat.id.$t
                    var catSize = cat.size.$t
                    // var catBreed= cat.breeds.breed[1].$t
                    console.log(response.petfinder.pets.pet[i].name.$t)
                    for (var j = 0; j < cat.breeds.breed.length; j++) {
                        var catBreed= cat.breeds.breed[j].$t
                    }
                    $("#results").append("<div class='petDiv' id='"+ catName +"'><h1>" + catName +"</h1><img src='"+ catPhoto +"'><p>"+ catSex +", "+catBreed+", Is Cat a Mix? "+ catMix +"</p><p>"+catDescription+"</p></div>")
                 }
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
        
=======
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
>>>>>>> upstream/master
