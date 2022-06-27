document.body.onload = startTypeOut();

/**
 * Loop to make text appear char after char.
 * 
 * @param {Element} elmToType The element to type the text into. Inserts text into innerHTML.
 * @param {Text} textToInsert The text to be inserted.
 * @param {Number} index Index of the first character. Leave at default.
 
function typeOutLoop(elmToType, textToInsert, speed = 1) {
    let index = 0;
    let interval = setInterval(function() {

        for (i = 0; i < speed; i++) {
            if (index < textToInsert.length) {
                elmToType.innerHTML += textToInsert[index];
                index += 1;
            } else {
                clearInterval(interval);
                console.log("Finished.");
                break;
            }
        }
    }, 15);
}*/

/**
 * Starts the typing out loop.
 * @param {Boolean} serial Whether each element should be typed out one by one or at the same time.
 *//*
function startTypeOuts() {
    // !IMPORTANT!, only put the 'type-out' class on elements containing text and nothing else.
    // Put a wrapper around text that needs to be typed.
    const elmsToTypeOut = document.getElementsByClassName("type-out");
    console.log(elmsToTypeOut);

    if (elmsToTypeOut != null) {
        console.log("Found elements to type");



        for (i = 0; i < elmsToTypeOut.length; i++) {
            console.log(elmsToTypeOut[i]);
            const elm = elmsToTypeOut[i];
            const text = elm.innerHTML;
            elm.innerHTML = null;
            elm.style.display = 'inline';
            typeOutLoop(elm, text, 3);
        }
    }
}*/

function typeOutLoop(elms, elmIndex, speed) {
    console.log(elms);
    const elm = elms[elmIndex];
    console.log(elm);
    const text = elm.innerHTML;
    console.log(text);
    elm.innerHTML = null;
    elm.style.display = 'inline';
    elmIndex += 1;

    let index = 0;
    let interval = setInterval(function() {
        for (i = 0; i < speed; i++) {
            if (index < text.length) {
                elm.innerHTML += text[index];
                index += 1;
            } else {
                clearInterval(interval);
                console.log("Finished.");
                if (elmIndex < elms.length) {
                    typeOutLoop(elms, elmIndex, speed);
                }
                break;
            }
        }
    }, 15);
}

function startTypeOut() {
    const elms = document.getElementsByClassName("type-out");
    
    if (elms != null) {
        typeOutLoop(elms, 0, 3);
    }
}