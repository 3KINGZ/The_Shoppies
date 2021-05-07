import { useState } from "react";
import cancel from "../../assets/cancel.png";
import "./Notification.css";

export const Notification = () => {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <div className="notification">
      <div>
        <p>You've nominated up to 5 movies!</p>
      </div>
      <div>
        <img
          src={cancel}
          alt="cancel-button"
          style={{ width: "20px", height: "20px" }}
          onClick={() => setShow(!show)}
        />
      </div>
    </div>
  );
};
