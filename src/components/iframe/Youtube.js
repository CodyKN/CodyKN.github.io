import React from "react";

export const Youtube = ({title,src,width,height}) => {
  return (
    <iframe
        title={title}
        src={src}
        allow='autoplay; encrypted-media'
        allowfullscreen
        frameborder="0"
        width={width}
        height={height}
    />
  );
}
