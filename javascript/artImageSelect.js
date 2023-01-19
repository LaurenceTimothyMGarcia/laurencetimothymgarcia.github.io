// 
// Selects image of art gallery
// 

function imageSelect(flexHolder)
{
    const allImages = document.getElementsByClassName("flex-holder");
    for (image of allImages)
    {
        hideDescription(image);
    }

    showDescription(flexHolder);
}

//Displays description
function showDescription(flexHolder)
{
    console.log("open image");
    const image = flexHolder.children[0];
    const imageDescription = flexHolder.children[1];

    image.setAttribute("style", "width: 56vmin;");
    console.log(image);
    
    imageDescription.setAttribute("style", "display:block;");
    console.log(imageDescription);
    
}

function hideDescription(flexHolder)
{
    console.log("close image");

    const image = flexHolder.children[0];
    const imageDescription = flexHolder.children[1];

    image.removeAttribute("style");
    imageDescription.removeAttribute("style");
}