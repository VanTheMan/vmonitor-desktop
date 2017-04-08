const path = require('path');
const config = require('../../config');

const main = module.exports = {
    window: null,
    init,
    show,
    hide
}

const electron = require('electron');
const app = electron.app;

function init(options){
    if (main.window){
        return main.window.show();
    }

    const window = main.window = new electron.BrowserWindow({
        width: config.WINDOW_WIDTH,
        height: config.WINDOW_HEIGHT
    });

    window.loadURL(config.WINDOW_MAIN);
}

function show(){
    main.window.show();
}

function hide(){
    main.window.hide();
}