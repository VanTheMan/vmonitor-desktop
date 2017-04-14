const path = require('path');
const config = require('../../config');

const detail = module.exports = {
    window: null,
    init,
    show,
    hide
}

const electron = require('electron');
const app = electron.app;

function init(options){
    if (detail.window){
        return detail.window.show();
    }

    const window = detail.window = new electron.BrowserWindow({
        width: config.WINDOW_DETAIL_WIDTH,
        height: config.WINDOW_DETAIL_HEIGHT
    });

    window.loadURL(config.WINDOW_DETAIL);
    window.setMenu(null);

    window.once('close', function(){
        detail.window = null;
    });

    window.once('ready-to-show', function () {
        window.show()
    });
}

function show(){
    detail.window.show();
}

function hide(){
    detail.window.hide();
}