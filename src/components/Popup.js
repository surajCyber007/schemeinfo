import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const Popup = ({ handleClosePopup }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const num = Math.floor(Math.random() * 2);
  const message =
    num === 1
      ? "You are Eligible for this scheme."
      : "You are not eligible for this scheme";

  const bgBtn = num === 1 ? true : false;

  return ReactDOM.createPortal(
    <div>
      <div className="bg-slate-200 opacity-70 fixed inset-0"></div>
      <div className="fixed inset-x-10 inset-y-40 bg-white flex flex-col justify-center items-center space-y-3 rounded-xl">
        <h1>{message}</h1>
        <Button
          handleClick={handleClosePopup}
          danger={!bgBtn}
          success={bgBtn}
          textWhite
          rounded
        >
          {num === 1 ? "Apply" : "Close"}
        </Button>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Popup;
