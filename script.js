document.body.onload = startTypeOut();

function checkIfInvisible(elm) {
    return elm.offsetWidth > 0 || elm.offsetHeight > 0;
}

/**
 * 
 * @param {getElementsByClassName} elms List of elements to type text for.
 * @param {Integer} elmIndex The index of the element currently being typed out.
 * @param {Integer} speed The amount of chars to print per loop.
 */
function typeOutLoop(elms, elmIndex, speed) {
    if (elmIndex >= elms.length) {
        console.log("Drawn all elements.");
    } else {
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
}

function typeOut() {
    
}

function startTypeOut() {
    const elms = document.getElementsByClassName("type-out");
    
    if (elms != null) {
        let visibleElems = [];
        let invisibleElems = [];

        for (const elm in elms) {
            if ($(elm).is(":visible")) {
                console.log("Inivisible element.");
                invisibleElems.push(elm);
            } else {
                console.log("Visible element.");
                visibleElems.push(elm);
            }
        }
        typeOutLoop(elms, 0, 5);
    }
}