var myIndex = 0;
carousel();
function carousel() {
    var i;
    var b = document.getElementsByClassName("BSK");
    for (i = 0; i < b.length; i++) {
        b[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > b.length) { myIndex = 1 }
    b[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}

