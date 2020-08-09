const openNav = () => {
    const slideDown = document.getElementById("overlayBar");
    slideDown.style.height = "50%";
};

const closeNav = () => {
    const slideUp = document.getElementById("overlayBar");
    slideUp.style.height = "0%";
};