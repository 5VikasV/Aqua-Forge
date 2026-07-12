import { motion } from "framer-motion";

const particles = Array.from({ length: 25 });

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, index) => {
        const left = Math.random() * 100;
        const duration = 8 + Math.random() * 10;
        const delay = Math.random() * 8;
        const size = 2 + Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-cyan-300/40"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              bottom: "-20px",
            }}
            animate={{
              y: [-20, -900],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}

export default FloatingParticles;