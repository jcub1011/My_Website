const text = [`
  _____             ____     ____     ____\n\
 /__ __/   /\\      / ___\\   / __ \\   |  __ \\\n\
   | |    /  \\    / /      / /  \\ \\  | | / /\n\
   | |   / /\\ \\  | |      | |    | | | |{ {\n\
 __/ /  / ____ \\  \\ \\____  \\ \\__/ /  | |_\\ \\\n\
/___/  /_/    \\_\\  \\____/   \\____/   |_____/\n\n\
McCormack`];

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