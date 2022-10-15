const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,

      webviewTag: false,
      sandbox: false,
      allowRunningInsecureContent: true,
      offscreen: false,
      webSecurity: false,
    },
  });

  const start_url = isDev ? 'http://localhost:6006' : `file://${path.join(__dirname, '../storybook-dist/index.html')}`;

  win.loadURL(start_url);
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
