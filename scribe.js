$(document).ready(function() {

    $("#launchHome").click(function() {
 
         $("#hero").addClass("is-hidden"); 

         $("#main-content").removeClass("is-hidden"); 
          
         //const url = "https://api.quotable.io/random";
         function generateQuote(){
            fetch('https://api.quotable.io/random')
           .then(function(data) {
                  return data.json();
             })
             .then(function(data){    
             document.getElementById("quote").innerHTML = '"' + data.content + '"'; 
             document.querySelector(".author").innerHTML = "- " + data.author;
            })
          .catch(function(err) {
             console.log(err); 
             });
          }
          // Repeat generateQuote() every 10 seconds
         setInterval(generateQuote() ,10000);
         //Note - 10000 milliseconds = 10
        });

    // let currentDay = moment().format("dddd, MMMM Do YYYY")
    // $("#currentDay").text(currentDay)

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $("#launchModal").click(function() {
 
        $(".modal").addClass("is-active"); 
       
      });

    $(".modal-close").click(function() {
 
        $(".modal").removeClass("is-active"); 
       
      });
  });