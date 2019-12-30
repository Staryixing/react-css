const { app, globalShortcut, ipcMain,BrowserWindow } = require('electron')
console.log('electron')

let mainWindow;
function createWindow(){
  mainWindow = new BrowserWindow({
    width: 800, height: 600
  })
  // mainWindow.loadURL('http://localhost:9000/#/detail')
  mainWindow.loadFile('./build/index.html')
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function(){
    mainWindow = null
  })
}

app.on('ready', createWindow)
