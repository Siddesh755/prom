import { useEffect, useState } from "react";
import TextCursor from "./TextCursor";
import promsvg from "../assets/prom.svg";

// Heart component with randomized properties
const FallingHeart = ({ index }) => {
  // Generate random properties for each heart
  const size = Math.random() * 30 + 10; // Between 10px and 40px
  const initialLeft = Math.random() * 100; // Random horizontal position (0-100%)
  const delay = Math.random() * 5; // Random delay (0-5s)
  const duration = Math.random() * 10 + 5; // Random animation duration (5-15s)
  const rotate = Math.random() * 360; // Random rotation

  return (
    <div
      className="absolute top-0 text-[#ff4c7f] z-0 opacity-70"
      style={{
        left: `${initialLeft}%`,
        fontSize: `${size}px`,
        animation: `fall ${duration}s linear ${delay}s infinite`,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      ❤️
    </div>
  );
};

const Hero = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create 20 hearts
    const heartCount = 20;
    setHearts(Array.from({ length: heartCount }, (_, i) => i));

    // Add falling animation to the global style
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @keyframes fall {
        0% {
          transform: translateY(-5%) rotate(0deg);
          opacity: 0.8;
        }
        50% {
          transform: translateY(50vh) rotate(180deg);
          opacity: 0.9;
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0.7;
        }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#ffc2d1]">
      {/* Falling Hearts */}
      {hearts.map((index) => (
        <FallingHeart key={index} index={index} />
      ))}
      
      <TextCursor />
      
      {/* Content layer */}
      <div className="flex justify-center pt-4 sm:pt-6 md:pt-8 lg:pt-12 z-10 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#993352] font-extrabold text-center">
           URVASHI✨ WILL YOU COME TO PROM WITH ME
        </h1>
      </div>
      
      {/* Message paragraph - larger on mobile */}
      <div className="flex flex-col items-center justify-center h-1/2 px-4 z-10 relative">
        {/* Mobile view: Larger text, no line breaks, but with gradient */}
        <p className="md:hidden text-2xl sm:text-3xl text-center font-extrabold text-[#ff4c7f] leading-tight w-full px-2">
          Okay, hear me out. 
          <span className="text-transparent bg-clip-text bg-gradient-to-l to-[#cc003a] from-[#993352]">
            Me + You + Prom = Unforgettable Night.
          </span> 
          We'll dance, laugh, and make awesome memories. What do you say? Prom with me?
        </p>
        
        {/* Desktop view: With line breaks */}
        <p className="hidden md:block text-3xl lg:text-4xl xl:text-5xl text-center font-extrabold max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl text-[#ff4c7f] leading-snug">
          Okay, hear me out <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l to-[#cc003a] from-[#993352]">
            Me + You + Prom = Unforgettable Night.
          </span>
          <br />
          We'll dance, laugh, and make awesome memories.
          <br />
          What do you say? Prom with me?
        </p>
      </div>
      
      {/* "So, is it a Yes" text - LARGER on mobile, normal on desktop */}
      <h1 className="absolute inset-x-0 bottom-36 md:bottom-auto md:right-4 md:left-auto md:right-8 lg:right-16 xl:right-24 md:bottom-20 lg:bottom-32 xl:bottom-40 text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent text-border bg-clip-text bg-gradient-to-l to-[#cc003a] from-[#993352] text-center md:text-right z-20">
        So, is it a Yes
      </h1>
      
      {/* Image - centered on mobile, bottom left on larger screens with LARGER size on desktop */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center md:justify-start md:left-0 w-full z-0">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl pointer-events-none"
          src={promsvg}
          alt="prom decoration"
        />
      </div>
    </div>
  );
};

export default Hero;