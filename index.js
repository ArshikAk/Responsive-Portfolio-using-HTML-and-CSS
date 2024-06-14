function menu()
{
    var dropdown = document.getElementById("nav");

    if(dropdown.style.display == "block"){
        dropdown.style.display = "none";
    }
    else{
        dropdown.style.display = "block";
    }
}