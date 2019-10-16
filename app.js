var init=30;
var arrow= onkeyup
window.addEventListener('keyup',arrow);

function arrow(event) {
        event.preventDefault ();
    var balloon = document.getElementById("balloon");
    switch (event.keyCode) {
        case 68:
            init=init-10;
            balloon.style.fontSize=init+"px";
            if (init <=0) {
                balloon.textContent="done";
                balloon.style.fontSize="30px";
                window.removeEventListener('keyup',arrow);
            }break;
              
            case 73:
            if (init >=60) {
                balloon.textContent="💥";
                window.removeEventListener('keyup',arrow);
            }
    
            else{
                init=init+10;
                balloon.style.fontSize=init+"px";
            }break;
            }

    }
    
            
    


