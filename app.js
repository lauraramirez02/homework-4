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
function getSizeValue(valueWithUnit, unit) {
	return parseInt(valueWithUnit.split(unit)[0]);
}

function balloon(event) {
	// if (event.defaultPrevented) {
	//   return; // Do nothing if the event was already processed
	// }
	switch (event.keyCode) {
		case 30:
			changeSize('.balloon', 1.1, 'down');
			break;
		case 28:
			changeSize('.balloon', 1.1);
			break;
		default:
			return; // Quit when this doesn't handle the key event.
	}

	// Cancel the default action to avoid it being handled twice
	// event.preventDefault();
}

function question() {
  $( ".exercise" ).toggleClass( "active" );
}

// element = 'string'
// amount = int
// direction '' or down
function changeSize(element, amount, direction) {
	element = document.querySelector(element);
	let elementSize = window.getComputedStyle(element).fontSize;
	let elementSizeValue = getSizeValue(elementSize, 'px');

	if (direction === undefined) {
		elementSizeValue *= amount;
	} else elementSizeValue /= amount;

	if (elementSizeValue <= 250) {
		console.log(elementSize);
		elementSize = Math.ceil(elementSizeValue) + 'px';
		element.style.fontSize = elementSize;
	} else boom(element);
}

function boom(element) {
	element.firstChild.nodeValue = '💥';
	document.removeEventListener('keydown', balloon, true);
}

document.addEventListener('keydown', balloon, true);

