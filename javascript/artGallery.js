// 
// JS file for 2d art gallery, temporary until we create 3d one
// 

const track = document.getElementsByClassName("image-track")[0];

const handleOnDown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0")
    {
        return;
    }

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    // console.log(`PERCENTAGE: ${percentage}`);

    //Solves edge case of mouse not initializing
    if (track.dataset.prevPercentage == "undefined")
    {
        track.dataset.prevPercentage = 0;
    }

    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    // console.log(`Track data prev percent: ${track.dataset.prevPercentage}`);
    // console.log(`PERCENTAGE UNCONSTRAINED: ${nextPercentageUnconstrained}`);

    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    // console.log(`NEXT PERCENTAGE: ${nextPercentage}`);

    track.dataset.percentage = nextPercentage;

    // Direct update to the css, not as smooth
    // track.style.transform = `translate(${nextPercentage}%, -50%)`;

    // Using animation to translate, looks more smooth
    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill: "forwards"});


    // Direct update to the css, not as smooth
    // image.style.objectPosition = `${100 + nextPercentage}% center`;

    // Using animation to change object
    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, {duration: 1200, fill: "forwards"});
    }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);