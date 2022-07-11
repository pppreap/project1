$(document).ready(function() {
  let userPosts = $("#posts")


  $("img").hide();

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


//Opens the main page
  $("#launchHome").click(function() {

       $("#hero").addClass("is-hidden"); 

       $("#main-content").removeClass("is-hidden"); 
        
      //Using the Quotable API again
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

      //Adds listener to "New Post" button for user name and entry
  $("#launchModal").click(function() {
      $(".modal").addClass("is-active"); 
    });

    //Allows user to close modal with cancel button or close "X"
  $(".modal-close").click(function() {
      $(".modal").removeClass("is-active"); 
    });
    let cancelBtn = $("#cancel") 
    cancelBtn.click(function () {
      $(".modal").removeClass("is-active")
    })
    
    
    //After user inputs grabs IP and generates a picture related to city name
      $("#submit").click(function() {
        let userName = $("#username").val()
          let message = $('#user-message').val();

          //Grabs IP 
            $.getJSON("https://api.ipify.org/?format=json", function(e) {
              let ipKey = e.ip
              console.log(e)
              //Uses IP to grab geodata
              $.ajax({
                url: "https://ipgeolocation.abstractapi.com/v1/?api_key=a68b984c68ff42ccaaca88c63e8a1668&ip_address=" + ipKey,
                method: "GET"
              }).then(function (data) {
                console.log(data)
                let location = data.city
                //Uses location to generate a random picture 
                $.ajax({
                  url: `https://api.unsplash.com/search/photos?query=${location}&client_id=t8900iGRKbL5Z9ERoHrnwFsvAjDAjoOf9FCmiRtrp2g`,
                  success: function(data){ 
                      console.log(data)
                      let iconUrl = data.results[0].urls.small
                      $('#icon').attr('src', iconUrl)
                      postUserMessage(iconUrl)
                  },
                  error: function(){
                    alert("There was an error.");
                  }
              });
              
              //Adds all collected input and displays to the page
                  function postUserMessage(iconUrl) {
                    userPosts.prepend(`
                    <div class="columns is-centered">
                    <div class="column is-four-fifths">
                          <article class="message is-link">
                              <div class="message-header">
                                  <p class='li'>${userName}</p>
                                  <p class='li'>${location}</p>
                                  </div>
                                  <div class="message-body">
                                  ${message}
                              </div>
                              <img src=${iconUrl} alt="Show/Hide Image" id="myImg"/>
                              <br>
                              <button class='button btn1 mt-2' type="button">Show/Hide Image</button>
                              </article>
                              </div>
                  </div>
                    `)
      
                    $("img").hide();
                    sessionStorage.setItem("userInputs", $("#posts").html())
                    $(".modal").removeClass("is-active")
                  }
                })
              });
    
    
      let saved = sessionStorage.getItem("userInputs")
    
      userPosts.prepend(saved)
    
      $(document).on("click", "button.btn1", function(){
        $(this).siblings("img").toggle("slow")
    });
    
    
    })
});
