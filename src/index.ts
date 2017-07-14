import { app, BrowserWindow, screen } from 'electron';

let mainWindow: Electron.BrowserWindow | null;

//ignoro errores de certificado
app.commandLine.appendSwitch('ignore-certificate-errors');

const isDevMode = process.execPath.match(/[\\/]electron/);

//if (isDevMode) enableLiveReload();
const createWindow = async () => {

  let display = screen.getPrimaryDisplay()
  let scaleFactor = display.scaleFactor;

  mainWindow = new BrowserWindow({
      width: display.size.width,
      height: display.size.height,
      webPreferences: {
          zoomFactor: 1 / scaleFactor
      },
    });

  //deshabilita el menú superior. No funciona en Mac
  mainWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  if (isDevMode) {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();

  // Query all cookies.
  //console.log('COOKIES');
  //session.defaultSession.cookies.get({}, (error, cookies) => {
  //  console.log(error, cookies)
  //})
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});