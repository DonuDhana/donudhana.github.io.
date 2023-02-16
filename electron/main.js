const { app, BrowserWindow } = require('electron')

function createWindow() {

    const properties = {
        width: 800,
        height: 600,
        autoHideMenuBar: true
    }

    const win = new BrowserWindow(properties)
    win.loadURL('http://localhost:4000')
    win.maximize()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})