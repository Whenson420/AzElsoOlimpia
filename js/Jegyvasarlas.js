function showTeamNameField() {
    var type = document.getElementById('jelentkezes-tipus').value;
    var teamNameField = document.getElementById('csapat-neve');
    if (type === 'csapatos') {
        teamNameField.style.display = 'block';
    } else {
        teamNameField.style.display = 'none';
    }
}

function showMessage() {
    var message = document.getElementById('message');
    message.style.display = 'block';

    // Hide the message after 5 seconds
    setTimeout(function() {
        message.style.display = 'none';
    }, 5000);
}

// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting
    showMessage(); // Displays the success message
});

// Handle button click
document.querySelector('.image-button').addEventListener('click', showMessage);
