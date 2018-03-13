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
        