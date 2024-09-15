import * as React from "react";

function ImageComponent({src, alt, className}) {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
}

export default ImageComponent;