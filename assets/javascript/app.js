$(document).ready(function () {

    // Global Varriables //
    var pfApiKey = "9da4a66757d1c617a44a579e1b05eabd";
    var searchAnimal
    var isAnimalselected = false
    var isZipselected = false

    // Side Nav Bar - Initialize collapse button
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('select').material_select();
    $('.slideshow-container').hide();
    // // Contact Page //
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
    $(document).on('click', '#send-button', function () {
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
//     // Functions when you click search //
    $("#searchBTN").on("click", function (event) {
        event.preventDefault();
        searchAnimal = $("#petDropdown option:selected").attr('id');
        // var selected = $("#petDropdown")
        // var selectedChoice = selected.options[selected.selectedIndex].value;
        if ($("#petDropdown option:selected").attr('id') == 'dog' || 'cat'){
            isAnimalselected=true
        }
        zip = $("#zipcodes").val();
        if (zip.length == 5){
            isZipselected=true
        }
        if (isAnimalselected==true && isZipselected== true) {
             search()
        }   
    });

    document.addEventListener('DOMContentLoaded', search);
    var slideIndex = 1;
    // Search function that runs the Petfinder API and Ajax // 
    function search() {
        event.preventDefault();
        $("#pet-choose").empty();
        $("#button-row").empty();
        $('#pet-choose').append("<div class='slideshow-container'><div id='slideshowResults'></div><a id='prev' class='prev' data-value='-1' >&#10094;</a><a class='next' data-value='1' id='next'>&#10095;</a></div>")
        document.getElementById("next").addEventListener("click", plusSlides, false);
        document.getElementById("prev").addEventListener("click", minusSlides, false);
        var url = 'https://api.petfinder.com/pet.find';
        $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",
            data: {
                key: pfApiKey,
                animal: searchAnimal,
                'location': zip,
                output: 'basic',
                format: 'json',
                count: '20'
            },
            success: function (response) {
                console.log(response);
                for (var i = 0; i < response.petfinder.pets.pet.length; i++) {
                    rescue = response.petfinder.pets.pet[i]
                    var name = response.petfinder.pets.pet[i].name.$t
                    var petPicture = rescue.media.photos.photo[2].$t
                    var sex = rescue.sex.$t
                    var description = rescue.description.$t
                    var mix = rescue.mix.$t
                    var address1 = rescue.contact.address1.$t
                    var address2 = rescue.contact.address2.$t
                    var email = rescue.contact.email.$t
                    var phone = rescue.contact.phone.$t
                    var state = rescue.contact.state.$t
                    var zip = rescue.contact.zip.$t
                    var city = rescue.contact.city.$t
                    var lastUpdate = rescue.lastUpdate.$t
                    var rescueId = rescue.id.$t
                    var size = rescue.size.$t
                    var age = rescue.age.$t
                    // var rescueBreed= rescue.breeds.breed[1].$t
                    if (rescue.breeds.breed.length > 1) {
                        for (var j = 0; j < rescue.breeds.breed.length; j++) {
                            var rescueBreed = rescue.breeds.breed[j].$t
                        }
                    }
                    $('#slideshowResults').append("<div class='petDiv fade' id='" + name + "'><img src='" + petPicture + "' style='width:500px;'><div class='text'><h2>" + name + "</h2><p>Sex: " + sex + "</p><p>Age: " + age + "</p><br><button id='moreBTN' value='"+ description +"' nameValue='"+ name +"' class='"+ name +" btn-large waves-effect waves-light orange'>More Information</button><div id=moreDiv>"+description+"<div></div><br></div>");
                    $('#moreDiv').hide()
                    $('.slideshow-container').show()
                }
                showSlides(slideIndex);
                $("#moreBTN").on("click", function (event) {
                    event.preventDefault();
                    $("#moreBTN").hide();
                    $('#moreDiv').show()
                });
            }
        });
    }
    // Next control
    function plusSlides() {
        console.log('hello from plusSlides')
        var n = $(this).data('value')
        console.log('this is n within plusSlide', n)
        console.log('this is slideIndex+=n ', slideIndex += n)
        showSlides(slideIndex += n);
    }
    // previous control
    function minusSlides() {
        console.log('hello from minusSlides')
        var n = -1
        console.log('this is n within plusSlide', n)
        console.log('this is slideIndex+=n ', slideIndex += n)
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        console.log('within currentSlide ')
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("petDiv");
        console.log('hello from show slides');
        console.log('slides.legnth is = ', slides.length);
        console.log('this is n before if statements ', n);
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        console.log('slides in showSlides', slides);
        console.log('slideIndex ', slideIndex)
        slides[slideIndex - 1].style.display = "block";
    }

    $(document).on('click', '#info-button', function () {
        $("#pet-info").empty();
        $("#moreDiv").hide();
    })
    $(document).on('click', '#next-button', function () {
        $("#pet-info").empty();
        $("#moreDiv").hide();
    })
});
// Why Adopt Slide-Show
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}