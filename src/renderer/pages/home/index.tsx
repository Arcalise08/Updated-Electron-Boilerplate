import React from "react";
import { useNavigate } from "react-router-dom";
import IpcService from "../../services/ipcService";
const HomePage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = React.useState<string>("");
  const postMessage = () => {
    const ipcService = new IpcService();
    ipcService.OpenDialog(message);
  }

  return (
    <div>
      <div>
        <p>This is the Home Page</p>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={postMessage}>Send</button>
      </div>
      <button style={{marginTop:25}} onClick={() => navigate("/other-page")}>Go Home</button>

    </div>
  );
};

export default HomePage;
