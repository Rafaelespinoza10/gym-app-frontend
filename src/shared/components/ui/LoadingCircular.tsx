import { Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

export const LoadingOverlay = ({ message = "Loading..." }: { message?: string }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/40">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.95, 1.1, 0.95],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Dumbbell size={64} className="text-[#5386F4]" />
        </motion.div>
        <p className="text-base tracking-wide text-gray-700">{message}</p>
      </div>
    </div>
  );
};
