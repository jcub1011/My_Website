document.body.onload = launchApp('terminal');

function createTray(name){
    // Initializes the tray.
    console.log("Generating tray: " + name);
    const tray = document.createElement("div");
    tray.className = "row program-button-tray";
    tray.setAttribute('id', 'terminal');
    
    // Creates the tray name.
    const programName = document.createElement("div");
    programName.innerHTML = name;
    programName.className = "col container d-flex";
    tray.appendChild(programName);

    // Creates the tray buttons.
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "col container-fluid d-flex flex-row-reverse px-0";
    const xButt = document.createElement("button");
    xButt.className = "tray-buttons";
    xButt.innerHTML = "X";
    const minButt = document.createElement("button");
    minButt.className = "tray-buttons";
    minButt.innerHTML = "-";

    buttonContainer.appendChild(xButt);
    buttonContainer.appendChild(minButt);
    tray.appendChild(buttonContainer);

    return tray;
}

function makeDraggable(app) {
    
}

function initalizeTerminal() {
    console.log("Initialising the terminal.");
    const terminal = document.createElement("div");
    terminal.setAttribute('id', 'terminal');
    terminal.className = "container terminal-window shadow";
    terminal.appendChild(createTray('Command Prompt'));

    const termBody = document.createElement("div");
    termBody.className = "row terminal-body container-fluid";
    const bodyText = document.createElement("p");
    bodyText.innerHTML = "Hello! I am a software engineer in the making! " + 
    "Currently I am studying at FGCU and plan to graduate in Fall 2025.";
    termBody.appendChild(bodyText);

    terminal.appendChild(termBody);

    document.body.appendChild(terminal);
}

function launchApp(application) {
    console.log("open: " + application);
    if (!!document.getElementById(application)) {
         console.log("App already open.");
    } else {
        if (application == "terminal") {
            initalizeTerminal();
        }
    }
}