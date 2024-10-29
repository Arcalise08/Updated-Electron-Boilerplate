import { dialog, ipcMain } from "electron";


const ipcMethods = () => {

  ipcMain.on('ipc-example', async (event, arg) => {
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
    console.log(msgTemplate(arg));
    event.reply('ipc-example', msgTemplate('pong'));
  });
  type DialogSomethings = {
    message: string
  }
  ipcMain.on('dialog-open', async (event, arg : DialogSomethings) => {
    dialog.showMessageBox({ message : arg.message });
  });
}

export default ipcMethods;
