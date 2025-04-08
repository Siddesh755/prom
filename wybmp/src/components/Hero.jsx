import TextCursor from "./TextCursor";
import promsvg from "../assets/prom.svg";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#ffc2d1]">
     
      <TextCursor />

      {/* Content layer */}
      <div className="flex justify-center pt-12 z-10 relative">
        <h1 className="text-6xl text-[#993352] font-extrabold text-center">
          WILL YOU COME to PROM WITH ME
        </h1>
      </div>

      <div className="flex justify-center mt-20 px-4 z-10 relative">
        <p className="text-5xl text-center font-extrabold max-w-8xl text-[#ff4c7f] leading-snug ">
          Okay, hear me out <br />  <span class="text-transparent bg-clip-text bg-gradient-to-l to-[#cc003a] from-[#993352]">Me + You + Prom = Unforgettable Night.</span>
          <br />
          We’ll dance, laugh, and make awesome memories.
          <br />
          What do you say? Prom with me?
        </p>
      </div>

      <img
        className="absolute inset-x-0 bottom-0 w-3xl pointer-events-none"
        src={promsvg}
        alt="prom decoration"
      />
      <h1 className=" absolute right-50 bottom-40 text-7xl font-extrabold text-transparent  text-border bg-clip-text bg-gradient-to-l to-[#cc003a] from-[#993352]">
        So, is it a Yes
      </h1>
    </div>
  );
};

export default Hero;
