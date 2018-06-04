import React from "react";
import Highlight from "./highlight";

export default ({ className = "", children }) => {
  const [, lang] = className.split("-");
  if (lang) {
    return <Highlight className={className}>{children.join("")}</Highlight>;
  }

  return <code className={className}>{children}</code>;
};
