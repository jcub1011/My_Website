/*
const text = 
[`  _____             ____     ____     ____\n\
 /__ __/   /\\      / ___\\   / __ \\   |  __ \\\n\
   | |    /  \\    / /      / /  \\ \\  | | / /\n\
   | |   / /\\ \\  | |      | |    | | | |{ {\n\
 __/ /  / ____ \\  \\ \\____  \\ \\__/ /  | |_\\ \\\n\
/___/  /_/    \\_\\  \\____/   \\____/   |_____/\n\n\
McCormack`,];

document.body.onload = typeOutText("nameHead", text[0]);

function typeOutText(elementToPutTextIn, textToInsert) {
    console.log("Setting up type out.");
    const interval = 1; // Time between char in ms.

    const element = document.getElementById(elementToPutTextIn);
    
    const textContainer = document.createElement('pre');
    element.appendChild(textContainer);

    console.log("Initializing call loop.");
    textInsertCallLoop(elementToPutTextIn, textToInsert, interval, 0);
}

function textInsertCallLoop(elementToPutTextIn, textToInsert, interval, index) {
    const element = document.getElementById(elementToPutTextIn).querySelector("pre");

    if (index < textToInsert.length) {
        element.innerHTML += textToInsert[index];

        setTimeout(function() {
            textInsertCallLoop(elementToPutTextIn, textToInsert, interval, index += 1)
        }, interval);
    } else {
        console.log("Finished.");
    }
}

function typeText() {

}*/

/**
 * Loop to make text appear char after char.
 * 
 * @param {Element} elmToType The element to type the text into. Inserts text into innerHTML.
 * @param {Text} textToInsert The text to be inserted.
 * @param {Number} index Index of the first character. Leave at default.
 */
function typeOutLoop(elmToType, textToInsert, index = 0) {
    if (index < textToInsert.length) {
        elmToType.innerHTML += textToInsert[index];
        setTimeout(function() {
            typeOutLoop(elmToType, textToInsert, index + 1)
        }, 1);
    } else {
        console.log("finished");
    }
}

startTypeOuts();

function startTypeOuts() {
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
            typeOutLoop(elm, text);
        }
    }
}