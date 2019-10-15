var init=16;
document.addEventListener("keyup",arrow);

function arrow(event) {
    event.preventDefault ();
    var balloon = document.getElementById("balloon");
    switch (event.keyCode) {
        case 68:
            init=init-2;
            balloon.style.fontSize=init+"px";
            if (init <=0) {
                balloon.textContent="done";
                balloon.style.fontSize="60px";
                document.removeEventListener('keyup',minus);
            }break;
            
            case 73:
            if (init >=60) {
                balloon.textContent="💥";
                document.removeEventListener('keyup',plus);
            }
    
            else{
                init=init+2;
                balloon.style.fontSize=init+"px";
            }break;
            }
            }
    


