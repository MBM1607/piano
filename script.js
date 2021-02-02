
document.addEventListener("keypress", (e) => {
    const key = e.key.toUpperCase();
    if ("ASDFGHJWETYU".includes(key)) {
        let audio = new Audio(`audio/${key}.mp3`);
        audio.play();
    }
});