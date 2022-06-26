document.body.onload = startTypeOuts();
/*
function typeOutLoop(elmToType, textToInsert, index = 0) {
    if (index < textToInsert.length) {
        elmToType.innerHTML += textToInsert[index];
        setTimeout(function() {
            typeOutLoop(elmToType, textToInsert, index + 1)
        }, 1);
    } else {
        console.log("finished");
    }
}*/

/**
 * Loop to make text appear char after char.
 * 
 * @param {Element} elmToType The element to type the text into. Inserts text into innerHTML.
 * @param {Text} textToInsert The text to be inserted.
 * @param {Number} index Index of the first character. Leave at default.
 */
function typeOutLoop(elmToType, textToInsert, speed = 1) {
    let index = 0;
    let interval = setInterval(function() {

        for (i = 0; i < speed; i++) {
            if (index < textToInsert.length) {
                elmToType.innerHTML += textToInsert[index];
                index += 1;
            } else {
                clearInterval(interval);
                break;
            }
        }
    }, 1);

    console.log("Finished.");
}

/**
 * Starts the typing out loop.
 * @param {Boolean} serial Whether each element should be typed out one by one or at the same time.
 */
function startTypeOuts(serial = false) {
    // !IMPORTANT!, only put the 'type-out' class on elements containing text and nothing else.
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
}