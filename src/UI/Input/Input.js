import React from "react";

const Input = props => {
  let inputElement = null;
  switch (props.inputType) {
    case "input":
      inputElement = (
        <input onChange={props.changed} value={props.value} {...props.config} />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.changed}
          value={props.value}
          {...props.config}
        ></textarea>
      );
      break;
    default:
      inputElement = (
        <input onChange={props.changed} value={props.value} {...props.config} />
      );
      break;
  }

  return inputElement;
};

export default Input;
