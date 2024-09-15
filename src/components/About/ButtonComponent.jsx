import * as React from "react";

function ButtonComponent({text, className, redirectTo}) {
  const handleClick = () => {
    if(redirectTo) {
      window.location.href = redirectTo;
    }
  }
  return (
    <button className={className} role="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default ButtonComponent;