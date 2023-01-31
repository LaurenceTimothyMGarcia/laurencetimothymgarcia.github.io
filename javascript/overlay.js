var isOverlayOn;

//Displays overlay
function overlayOn(id)
{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").innerHTML += document.getElementById("exitbutton").innerHTML;
    document.getElementById("overlay").innerHTML += document.getElementById(id).innerHTML;
    isOverlayOn = true;
}

//Removes overlay
function overlayOff()
{
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay").innerHTML = "";
    isOverlayOn = false;
}