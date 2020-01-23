const { app, BrowserWindow } = require('electron');

let appWindow;

function crearVentana(){
    appWindow = new BrowserWindow({
        
    });
    appWindow.on('closed', () => {
        appWindow = null;
    })

    appWindow.loadFile('./index.html');

    appWindow.once('ready-to-show', () => {
        app.Window.show();
    })
}

app.on('ready', crearVentana)