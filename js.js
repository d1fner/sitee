document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            // Here you can add AJAX call to send the email to the server
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

