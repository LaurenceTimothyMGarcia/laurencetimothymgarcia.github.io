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

    if (currentImage == flexHolder)
    {
        hideDescription(currentImage);
        currentImage = null;
    }
    else
    {
        if (currentImage != null)
        {
            hideDescription(currentImage);
        }
    
        showDescription(flexHolder);
    }
}

//Displays description
function showDescription(flexHolder)
{
    console.log("open image");
    const image = flexHolder.children[0];
    const imageDescription = flexHolder.children[1];

    currentImage = flexHolder;

    //Image grow animation
    image.setAttribute("style", "width: 25vmin;");
    image.animate({
        width: "56vmin"
    }, {duration: 250, fill: "forwards"});

    //Sets background image to match the selected image
    // Removed too busy 
    // document.body.style.backgroundImage = `url(${image.src})`;
    
    // Text slide animation
    imageDescription.setAttribute("style", "display:block; z-index: -1; transform:translate(-100%, 0%);");
    imageDescription.animate({
        transform: "translate(0%, 0%)"
    }, {duration: 250, fill: "forwards"});
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

    imageDescription.animate({
        transform: "translate(-100%, 0%)"
    }, {duration: 250, fill: "forwards"});

    image.removeAttribute("style");
    imageDescription.removeAttribute("style");
}