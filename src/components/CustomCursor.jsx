import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", move);

    const follow = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.18;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.left = cursorPos.current.x + "px";
        cursorRef.current.style.top = cursorPos.current.y + "px";
      }

      requestAnimationFrame(follow);
    };

    follow();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;
