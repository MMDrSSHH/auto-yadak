import React from "react";

function Container({ children, className, ...props }) {
  return (
    <div className={`mx-[70px] ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;
