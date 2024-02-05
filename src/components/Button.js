import className from "classnames";
import React from "react";

const Button = ({
  children,
  handleClick,
  primary,
  textWhite,
  secondary,
  success,
  rounded,
  danger,
  bgBtn
}) => {
  const classes = className("px-4 py-1", {
    "bg-blue-400": primary,
    "bg-gray-500": secondary,
    "bg-green-500": success,
    "bg-red-500": danger,
    "text-white": textWhite,
    "rounded-md": rounded,
  });
  return (
    <button onClick={handleClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
