
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // Display message
    var message = `Thank you, ${name}! Someone may contact you at ${phone} or ${email}.`;
    document.getElementById("message").innerText = message;
});
