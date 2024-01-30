let started = false;
const main = document.querySelector("main");
const divs = document.querySelectorAll("div");
divs.forEach((e, i) => {
    e.style.right = `${i * (main.offsetWidth / divs.length)}px`;
    e.style.transformOrigin = `${i * (main.offsetWidth / divs.length) + e.offsetWidth / 2}px`;
    e.style.transform = `translateX(${e.offsetWidth / 2}px)`;
});

function start() {
    if (!started) {
        divs.forEach((e, i) => {
            gsap.to(e, {
                rotation: 180,
                duration: 2 + i * 0.05,
                yoyo: true,
                ease: "linear",
                repeat: -1,
            });
        });
    }
}

document.onclick = () => {
    start();
    started = true;
};