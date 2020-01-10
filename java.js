var button = document.querySelector(".filter-button");
var filter = document.querySelector(".filter-window");

function gaan() {
    filter.classList.toggle('active');
}

button.addEventListener('click', gaan);
