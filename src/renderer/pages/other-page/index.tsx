import React from "react";
import { useNavigate} from "react-router-dom";

const OtherPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>This is the Other Page</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default OtherPage;
