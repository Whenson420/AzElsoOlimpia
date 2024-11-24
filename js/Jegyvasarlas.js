//Csapat mód kiválasztásakor megjelenjen egy új sor, ahova be lehet írni a csapatnevet
function showTeamNameField() {
    var type = document.getElementById('jelentkezes-tipus').value;
    var teamNameField = document.getElementById('csapat-neve');
    if (type === 'csapatos') {
        teamNameField.style.display = 'block';
    } else {
        teamNameField.style.display = 'none';
    }
}


//Üzenet mutatása
function showMessage() {
    var message = document.getElementById('message');
    message.style.display = 'block';
    setTimeout(function() {
        message.style.display = 'none';
    }, 5000);
}

//Hogy ne Submiteljen a form
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showMessage();
});

//Gombnyomáskor jöjjön elő az üzenet
document.querySelector('.image-button').addEventListener('click', showMessage);
