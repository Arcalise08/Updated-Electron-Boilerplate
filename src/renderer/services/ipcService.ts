
class IpcService {

  OpenDialog(message : string) : void {
    window.electron.ipcRenderer.sendMessage(
      'dialog-open',
      {message});

  }

}

export default IpcService;
