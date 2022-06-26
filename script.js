document.body.onload = displayHeader();

function displayHeader() {
    // Generates the header.
    console.log("Generating header");
    const head = document.createElement("div");
    head.className = "header px-4 py-1";

    const name = document.createElement("pre");
    name.innerHTML = `
  _____             ____     ____     ____\n\
 /__ __/   /\\      / ___\\   / __ \\   |  __ \\\n\
   | |    /  \\    / /      / /  \\ \\  | | / /\n\
   | |   / /\\ \\  | |      | |    | | | |{ {\n\
 __/ /  / ____ \\  \\ \\____  \\ \\__/ /  | |_\\ \\\n\
/___/  /_/    \\_\\  \\____/   \\____/   |_____/\n\n\
McCormack`;

    head.appendChild(name);
    document.body.appendChild(head);
}