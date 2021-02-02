
document.addEventListener("keypress", (e) => {
    const key = e.key.toUpperCase();
    if ("ASDFGHJWETYU".includes(key)) {
        pianoButtonPress(document.getElementById(key))
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".piano-key").forEach((key) => {
       key.addEventListener("click", () => {
           pianoButtonPress(key)
       })
    });
});

function pianoButtonPress(key) {
    let audio = new Audio(`audio/${key.id}.mp3`);
    audio.play().then(() => {
        blink(key)
    });
}

function blink(key) {
    key.classList.add("pressed");
    setTimeout(() => key.classList.remove("pressed"), 500)
}