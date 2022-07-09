let submit = $("#submit");
let userPosts = $("#posts")

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
        author.textContent = '-'+ data.author;
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }
    // call updateQuote once when page loads
    updateQuote();
  });

$(document).ready(function() {

  $("img").hide();

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

    $("#launchModal").click(function() {
 
        $(".modal").addClass("is-active");
       
      });

      $("#open").click(function() {
 
        $(".modal").addClass("is-active");
       
      });

    $(".modal-close").click(function() {
 
        $(".modal").removeClass("is-active"); 
       
      });

    $("#submit").click(function() {
      console.log("Clicked")
        let userName = $('#username').val()
        let location = $('#location').val()
        let message = $('#user-message').val();

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

        $(".modal").removeClass("is-active"); 
      }
    })


    let saved = sessionStorage.getItem('userInputs')

    userPosts.prepend(saved)

    $(document).on("click", "button.btn1", function(){
      $(this).siblings("img").toggle("slow")
  });

  });