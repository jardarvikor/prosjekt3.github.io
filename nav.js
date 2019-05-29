window.onclick = function (event) {
    var dropdown = document.getElementsByClassName('dropdown-container');
    if (event.target.className == "dropdown-button") {
        dropdown[0].style.display = "flex";
    }
    else {
        dropdown[0].style.display = "none";
    }
}
