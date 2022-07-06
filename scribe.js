
<<<<<<< HEAD
=======
    $("#launchHome").click(function() {
 
         $("#hero").addClass("is-hidden"); 

         $("#main-content").removeClass("is-hidden"); 
          
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
        });

    // let currentDay = moment().format("dddd, MMMM Do YYYY")
    // $("#currentDay").text(currentDay)

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
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
>>>>>>> 1065fda1ac5f3236c42bc59a8f93256a1415696d
