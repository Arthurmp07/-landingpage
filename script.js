document.getElementById('search-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // Previne que o link seja seguido
    var searchInput = document.getElementById('search-input');
    if (searchInput.classList.contains('active')) {
        searchInput.classList.remove('active');
    } else {
        searchInput.classList.add('active');
        searchInput.focus();
    }
});