document.body.onload = launchApp('terminal');

const applications = {
    terminal: initalizeTerminal
}

function createTray(name){
    const tray = docmuent.createElement("div");
    tray.className = "row program-button-tray";
    
    const programName = document.createElement("div");
    programName.innerHTML = name;
    programName.className = "col container d-flex";
    tray.appendChild(programName);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "col container-fluid d-flex flex-row-reverse px-0";
    const xButt = document.createElement("button")

    return tray;
}

function initalizeTerminal() {
    console.log("Initialising the terminal.");0
    const terminal = document.createElement("div");
    terminal.setAttribute('id', 'terminal');
    terminal.className = "container terminal-window shadow";
    terminal.appendChild(createTray('Command Prompt'));
}

function launchApp(application) {
    console.log("open: " + application);
    if (!!document.getElementById(application)) {
         console.log("App already open.");
    } else {
        applications[application]();
    }
}