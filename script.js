// Function to show the modal when "Buy Now" is clicked
function showContactOptions() {
    document.getElementById("contactModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("contactModal").style.display = "none";
}

// Function to contact via WhatsApp
function contactWhatsApp() {
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=Hi, I'm interested in your product.`);
    closeModal();
}

// Function to contact via Email
function contactEmail() {
    const email = "support@giftshop.com"; // Replace with your email address
    window.location.href = `mailto:${email}?subject=Product Inquiry&body=I am interested in your product.`;
    closeModal();
}

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('newsletter-email').value;

  if (email) {
    alert('Thank you for subscribing to our newsletter!');
    document.getElementById('newsletter-email').value = '';
  } else {
    alert('Please enter a valid email address.');
  }
});



// JavaScript for handling newsletter form submission (you can modify it as needed)
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('newsletter-email').value;
  if (email) {
    alert('Thank you for subscribing with ' + email);
    // You can add functionality to send the email to your server here
  }
});