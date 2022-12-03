import React, { useRef, useState, useEffect } from 'react'

export const LazyImage = ({
  placeholderSrc,
  placeholderClassName,
  placeholderStyle,
  src,
  alt,
  className,
  style,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState("");
  const placeholderRef = useRef(null);
  const imageRef = useRef();

  useEffect(() => {
    if (document.readyState === "complete") {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setView(src);
          observer.unobserve(placeholderRef.current);
        }
      });

      if (placeholderRef && placeholderRef.current) {
        observer.observe(placeholderRef.current);
      }
    }
  }, [src]);

  return (
    <>
      {isLoading && (
        <img
          src={placeholderSrc}
          alt=""
          className={placeholderClassName}
          style={placeholderStyle}
          ref={placeholderRef}
        />
      )}
      <img
        src={view}
        className={className}
        style={isLoading ? { display: "none" } : style}
        alt={alt}
        ref={imageRef}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}