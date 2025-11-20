import { useEffect, useState, useRef } from "react";

const Counter = ({ target = 100, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true;
            let start = 0;
            const increment = target / (duration / 16); // roughly 60fps

            const counter = setInterval(() => {
              start += increment;
              if (start >= target) {
                clearInterval(counter);
                setCount(target);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 } // jab element 50% visible ho
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
};

export default Counter;
