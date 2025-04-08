import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heart from "../assets/heart.svg"; 

const TextCursor = ({ spacing = 100 }) => {
  const [trail, setTrail] = useState([]);
  const idCounter = useRef(0);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setTrail((prev) => {
      const last = prev[prev.length - 1];
      if (!last || Math.hypot(mouseX - last.x, mouseY - last.y) >= spacing) {
        const newId = idCounter.current++;
        const newPoint = { id: newId, x: mouseX, y: mouseY };
        setTimeout(() => {
          setTrail((prevTrail) => prevTrail.filter((point) => point.id !== newId));
        }, 500);
        return [...prev, newPoint];
      }
      return prev;
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[999] pointer-events-none">
      <AnimatePresence>
        {trail.map((item) => (
          <motion.img
            key={item.id}
            src={heart}
            alt="heart"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ opacity: { duration: 0.8, ease: "easeOut" } }}
            className="absolute w-10 h-10"
            style={{ left: item.x, top: item.y }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextCursor;
