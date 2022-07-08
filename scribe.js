
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

let cancelBtn = $("#cancel") 
cancelBtn.click(function () {
  $(".modal").removeClass("is-active")
})


$.getJSON("https://api.ipify.org/?format=json", function(e) {
    console.log(e.ip);
    console.log(e)
    let ipKey = e.ip
    $.ajax({
      url: "http://api.positionstack.com/v1/reverse?access_key=fede56057a8e01c98e320fd27297bdfc&query=" + ipKey,
      method: "GET"
    }).then(function (data) {
      console.log(data)
      console.log(data.data[0].locality)
      console.log(data.data[0].country)
      console.log(data.data[0].country_code)
      console.log(data.data[0].region)
      console.log(data.data[0].region_code)
    })
});
