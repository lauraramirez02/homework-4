const balloon= document.getElementById('balloon')

const keyboardInfo = e=> {
    console.log('Keyboard event: ${e.type}, key: ${e.key}, code: ${e.code');
};
document.addEventListener("keypress", keyboardInfo);

//eventTarget.addEventListener("keypress", event => {
//    if (event.)
//});
