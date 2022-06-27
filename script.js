document.body.onload = startTypeOut();

/**
 * 
 * @param {getElementsByClassName} elms List of elements to type text for.
 * @param {Integer} elmIndex The index of the element currently being typed out.
 * @param {Integer} speed The amount of chars to print per loop.
 */
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