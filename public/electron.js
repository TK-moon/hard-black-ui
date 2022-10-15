const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const start_url = isDev
    ? 'http://localhost:6006'
    : `file://${path.join(__dirname, '../storybook-static/index.html')}`;

  win.loadURL(start_url);
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
