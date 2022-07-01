$(document).ready(function() {

    $("#launchHome").click(function() {
 
         $("#hero").addClass("is-hidden"); 

         $("#main-content").removeClass("is-hidden"); 
           
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