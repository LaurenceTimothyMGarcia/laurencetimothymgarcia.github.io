// 
// Selects image of art gallery
// 

let currentImage = null;

function imageSelect(flexHolder)
{
    // const allImages = document.getElementsByClassName("flex-holder");
    // for (image of allImages)
    // {
    //     hideDescription(image);
    // }

    if (currentImage != null)
    {
        hideDescription(currentImage);
    }

    showDescription(flexHolder);
}

//Displays description
function showDescription(flexHolder)
{
    console.log("open image");
    const image = flexHolder.children[0];
    const imageDescription = flexHolder.children[1];

    currentImage = flexHolder;

    image.setAttribute("style", "width: 25vmin;");

    image.animate({
        width: "56vmin"
    }, {duration: 250, fill: "forwards"});

    //Sets background image to match the selected image
    // Removed too busy 
    // document.body.style.backgroundImage = `url(${image.src})`;
    
    imageDescription.setAttribute("style", "display:block;");
    
}

function hideDescription(flexHolder)
{
    console.log("close image");

    const image = flexHolder.children[0];
    const imageDescription = flexHolder.children[1];

    if (!image.hasAttribute("style") && !imageDescription.hasAttribute("style"))
    {
        return;
    }

    image.animate({
        width: "25vmin"
    }, {duration: 250, fill: "forwards"});

    image.removeAttribute("style");
    imageDescription.removeAttribute("style");
}