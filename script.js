const dot = document.getElementById("dot");

document.addEventListener("mousemove", (event) => {
    const x = event.clientX; // Get the mouse's x-coordinate
    const y = event.clientY; // Get the mouse's y-coordinate

    // Move the dot to the mouse position, centering it
    dot.style.transform = `translate(x, y)`; // 5px to center the dot
});
