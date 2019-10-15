const balloon= document.getElementById('balloon')

const keyboardInfo = e=> {
    console.log('Keyboard event: ${e.type}, key: ${e.key}, code: ${e.code');
};
document.addEventListener("keypress", key);

window.addEventListener("keypress", event => {
    if (event.key == "i") {
    document.balloon.style.width = "10px";
}
});



