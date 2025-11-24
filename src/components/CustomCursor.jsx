import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", move);

    const update = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: pos.current.x,
          y: pos.current.y,
          duration: 0.15,
          ease: "power2.out",
        });
      }
      requestAnimationFrame(update);
    };

    update();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;
