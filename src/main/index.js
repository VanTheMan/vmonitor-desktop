const electron = require('electron');
const app = electron.app;
const windows = require('./windows');
const ipc = require('./ipc');
const connector = require('./connector');
const ipcMain = require('electron').ipcMain;

app.on('ready', createWindow);

function createWindow(){
    windows.main.init();
    windows.main.show();
    windows.detail.init();
    windows.detail.hide();
}; 

ipcMain.on('doubleClickNode', function(event, arg){
    console.log("show window detail node " + arg);
    windows.detail.show();
});

ipcMain.on('request-data', (event, arg) =>{
    console.log('GUI request data');
    let data = connector.client.generateData();
    event.sender.send('data', data);
});

ipcMain.on('request-state', (event, arg) =>{
    console.log('GUI request state');
    let data = connector.client.generateState();
    event.sender.send('state', data);
});

ipc.init();
