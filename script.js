const homeImages = [
    "video/video1.mp4"
];
const loginImages = [
    "images/login1.jpg"
];
function startSlideshow(selector, images, intervalTime = 5000) {
    const section = document.querySelector(selector);
    if (!section) return;
    let index = 0;
    function changeBackground() {
        section.style.opacity = 0;
        setTimeout(() => {
            section.style.backgroundImage = `url(${images[index]})`;
            section.style.opacity = 1;
            index = (index + 1) % images.length;
        }, 1000);
    }
    changeBackground();
    setInterval(changeBackground, intervalTime);
}

