
function toggleNews() {
    var newsContent = document.querySelector('.news-content');
    var toggleButton = document.getElementById('toggle-news');
    if (newsContent.style.display === 'none') {
    newsContent.style.display = 'block';
    toggleButton.textContent = '▲';
} else {
    newsContent.style.display = 'none';
    toggleButton.textContent = '▼';
}
}

    // Initial state
    document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.news-content').style.display = 'none';
});