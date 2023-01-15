
//Displays overlay
function overlayOn()
{
    document.getElementById("overlay").style.display = "block";
}

//Removes overlay
function overlayOff()
{
    document.getElementById("overlay").style.display = "none";
}

//Adds webpage data to overlay
function overlayDataOn(id)
{
    document.getElementById(id).style.display = "block";
}

function overlayDataOff(id)
{
    document.getElementById(id).style.display = "none";
}