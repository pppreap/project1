
$(document).ready(function() {
  // DOM elements
  const quote = document.getElementById("quotes");
  const author = document.getElementById("author");
  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = '"'+ data.content + '"';
      quote.classList.add("glow", "is-size-5")
      author.textContent = '-'+ data.author;
      author.classList.add("glow", "is-size-6")
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }
  // call updateQuote once when page loads
  updateQuote();
});



$(document).ready(function() {

  $("#launchHome").click(function() {

       $("#hero").addClass("is-hidden"); 

       $("#main-content").removeClass("is-hidden"); 
        
      
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

let cancelBtn = $("#cancel") 
cancelBtn.click(function () {
  $(".modal").removeClass("is-active")
})



let locationShare = $("#yesShare")
if (locationShare) {
  $.getJSON("https://api.ipify.org/?format=json", function(e) {
    let ipKey = e.ip
    $.ajax({
      url: "http://api.positionstack.com/v1/reverse?access_key=fede56057a8e01c98e320fd27297bdfc&query=" + ipKey,
      method: "GET"
    }).then(function (data) {
      console.log(data.data[0].country_code)
      console.log(data.data[0].region_code)
      console.log(data)
      console.log(data.data[0].locality)
    })
  });
  
}