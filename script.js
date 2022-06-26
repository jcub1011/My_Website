document.body.onload = displayNameHeader();

function drawText(objToDrawIn) {
    console.log("Drawing text");
    console.log(objToDrawIn);
    const speed = 10; // Time in ms between each char.
    const textToDraw = objToDrawIn.innerHTML;

    objToDrawIn.innerHTML = null;
    console.log(textToDraw);
}

function displayNameHeader() {
    // Generates the header.
    console.log("Generating header");
    const head = document.createElement("div");
    head.className = "header px-4 py-1";
    head.setAttribute("id", "header");

    const fName = document.createElement("pre");
    fName.style.color = "#E7F9A9";
    fName.innerHTML = `
  _____             ____     ____     ____\n\
 /__ __/   /\\      / ___\\   / __ \\   |  __ \\\n\
   | |    /  \\    / /      / /  \\ \\  | | / /\n\
   | |   / /\\ \\  | |      | |    | | | |{ {\n\
 __/ /  / ____ \\  \\ \\____  \\ \\__/ /  | |_\\ \\\n\
/___/  /_/    \\_\\  \\____/   \\____/   |_____/`;

    const lName = document.createElement("p");
    lName.innerHTML = "McCormack";
    head.appendChild(fName);
    head.appendChild(lName);
    
    document.body.appendChild(head);

    drawText(document.querySelector("#header").fName);
}