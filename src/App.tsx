import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [slideUpLogo, setSlideUpLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setSlideUpLogo(true), 2000);

    const timer2 = setTimeout(() => setShowText(true), 1980); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <div className="flex flex-col items-center justify-center z-10">
        <motion.div
          animate={{
            y: slideUpLogo ? -50 : 0,
            marginBottom: slideUpLogo ? "mb-12" : "mb-0",
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center relative gap-4"
        >
          <div className="star-shape relative">
            <span className="star-segment segment-1"></span>
            <span className="star-segment segment-2"></span>
            <span className="star-segment segment-3"></span>
            <span className="star-segment segment-4"></span>
          </div>
          <div className="relative">
            <div className="star-triangle-shape">
              <span className="star-triangle-segment"></span>
              <span className="star-triangle-segment"></span>
              <div className="overlay-fill" />
            </div>
          </div>
        </motion.div>
        {showText && (
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-5xl uppercase font-medium tracking-[0.6em]"
          >
            ELEVATE
          </motion.h1>
        )}
      </div>
    </div>
  );
}

export default App;
