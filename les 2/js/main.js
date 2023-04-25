const colors = document.querySelectorAll(".colors__color");

colors.forEach((color) => {
    const randomHue = Math.floor(Math.random() * 360);
    const randomSaturation = Math.floor(Math.random() * 69) + 11;
    const randomLightness = Math.floor(Math.random() * 90) + 11;

    color.children[0].style.backgroundColor = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;

    color.addEventListener("click", () => {
        color.children[0].classList.add("colors__circle--selected");
        navigator.clipboard.writeText(color.children[0].style.backgroundColor);
        document.title = color.children[0].style.backgroundColor;
    });
});
