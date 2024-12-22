window.addEventListener("resize" , () => {
    const dimensions = `Window Dimensions: ${window.innerHeight}px x ${window.innerWidth}`;
    document.getElementById("dimensions").textContent = dimensions;
});

window.addEventListener("load" , () => {
    console.log("window Loaded");
});

window.addEventListener("scroll" , () => {
    console.log("window scroll");
});