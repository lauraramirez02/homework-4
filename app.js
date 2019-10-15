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
var init=16;
window.addEventListener("keyup",arrow);

function arrow(event) {
    event.preventDefault ();
    var balloon = document.getElementById("balloon");
    switch (event.keyCode) {
        case 73:
            init=init-2;
            balloon.style.fontSize-init+"px";
            if (init <=0) {
                balloon.textContent="Done";
                balloon.style.fontSize="60px";
                window.removeEventListener('keyup',minus);
            }
                
            break;
            case 68:
            if (init >=60) {
                balloon.textContent="💥";
                window.removeEventListener('keyup',plus);
            }
    
            else{
                init-init+2;
                balloon.style.fontSize=init+"px";
                )break;
            }
            }
    }


