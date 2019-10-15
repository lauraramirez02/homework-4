//const balloon= document.getElementById('balloon')

//const keyboardInfo = e=> {
//    console.log('Keyboard event: ${e.type}, key: ${e.key}, code: ${e.code');
//};
//document.addEventListener("keypress", key);

//window.addEventListener("keypress", event => {
//    if (event.key == "i") {
//    document.balloon.style.width = "10px";
//}
//});

var balloon;
var maxBlows;
var currentBlow= 0;
var boom;

function blow () {
    currentBlow = currentBlow + 1;
    if (currentBlow <= maxBlows) {
        var blowAmount = 50;
        var balloonWidth = parseInt (balloon.style.width);
        var newBalloonWidth = blowAmount + balloonWidth;
        balloon.style.width = newBalloonWidth + "px";
        
        count.innerHTML = currentBlow;
    } else {
        balloon.style.display ='none';
    boom.style.display = "block";
}
    
}


