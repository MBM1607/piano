
document.addEventListener("keypress", (e) => {
    const key = e.key.toUpperCase();
    if ("ASDFGHJWETYU".includes(key)) {
        let audio = new Audio(`audio/${key}.mp3`);
        audio.play().then(() => {
            blink(document.getElementById(key))
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".piano-key").forEach((key) => {
       key.addEventListener("click", () => {
           blink(key)
       })
    });
});

function blink(key) {
    key.classList.add("pressed");
    setTimeout(() => key.classList.remove("pressed"), 500)
}