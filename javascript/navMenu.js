// toggles between showing nav menu when user clicks on icon

function navToggle() 
{
    const x = document.getElementById("nav-links");

    if (x.style.display === "block")
    {
        x.style.display = "none";
    }
    else
    {
        x.style.display = "block";
    }
}