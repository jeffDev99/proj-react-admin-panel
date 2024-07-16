import React from "react";
import * as Icons from "iconsax-react";
import "./Button.css"

export default function Button(props) {
  const IconComponent = Icons[props.icon];
  return (
    <button type="button" className={`button ${props.variant}`}>
      {IconComponent && <IconComponent />}
      <span>{props.value}</span>
    </button>
  );
}
