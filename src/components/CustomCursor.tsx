import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOverCode, setIsOverCode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive elements
      if (target.closest('a, button, [role="button"], input, select, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      // Check if hovering over code editor
      if (target.closest('.code-window')) {
        setIsOverCode(true);
      } else {
        setIsOverCode(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovering ? 16 : 6),
          y: mousePosition.y - (isHovering ? 16 : 6),
          scale: isHovering ? 1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`rounded-full bg-foreground transition-all duration-200 ${
            isHovering ? "w-8 h-8 opacity-50" : "w-3 h-3"
          }`}
        />
      </motion.div>

      {/* Glow effect when over code */}
      {isOverCode && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
        >
          <div className="w-20 h-20 rounded-full bg-cursor-glow/20 blur-xl" />
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
