import "./Toast.css";
import { useEffect } from "react";

function Toast({ message }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".toast").remove();
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return <div className="toast">{message}</div>;
}

export default Toast;