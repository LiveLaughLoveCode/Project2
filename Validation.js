// All:
// Search bar:
// Select the form
const form = document.querySelector('.search-form');

// Get the search input
const searchInput = document.querySelector('.form-control');

// Get the navbar links
const navbarLinks = document.querySelectorAll('.navbar-brand');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from being submitted
  event.preventDefault();

// Alert the search query
alert(`You searched for: ${searchInput.value}\n\nThe options are:\n- Home\n- Contacts\n- Game One\n- News\n- More`);

});

// Add a keyup event listener to the search input
searchInput.addEventListener('keyup', function() {
  // Get the search query
  const query = this.value.toLowerCase();

  // Loop through the navbar links
  navbarLinks.forEach(function(link) {
    // If the link text includes the search query, show the link, otherwise hide it
    if (link.textContent.toLowerCase().includes(query)) {
      link.style.display = 'block';
    } else {
      link.style.display = 'none';
    }
  });
});


// Home:
$(document).ready(function() {
  let carousel = $('#carouselExampleDark');
  if (carousel.length) {
      carousel.carousel({
          interval: 5000
      });
      carousel.carousel('cycle');
  }
});



// Contacts: 
function validateAndSendEmail() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Validate Name
    if(name == "") {
        alert("Name cannot be empty");
        return false;
    }

    // Validate Email
    if(email == "") {
        alert("Email cannot be empty");
        return false;
    } else {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
    }

 // Validate Phone Number
    if(phone == "") {
        alert("Phone number cannot be empty");
        return false;
    } else {
        var regex = /^\d{1,11}$/;
        if(!regex.test(phone)) {
            alert("Please enter a valid phone number. It should not exceed 11 digits and only digits are valid.");
            return false;
        }
    }

    // Validate Message
    if(message == "") {
        alert("Message cannot be empty");
        return false;
    }

    // If everything is valid, submit the form
    alert("Email has been sent");
    return true;
}



// Image
$(document).ready(function() {
  $(".contact-image").click(function() {
      $(this).toggleClass("flipped");
  });
});