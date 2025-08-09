import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Drawer = ({ isOpen, onClose, children, title }: DrawerProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fondo semitransparente con blur */}
          <motion.div
            className="fixed inset-0 bg-white/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.aside
            className="fixed inset-0 z-50 flex justify-end"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className="relative bg-white/70 backdrop-blur-lg w-full h-full md:w-[480px] md:top-6 md:bottom-6 md:right-6 md:rounded-2xl md:max-h-[92vh] shadow-xl border border-white/30 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/30">
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-900">{title || "Details"}</h2>
                  <span className="text-sm text-gray-600">Fill in the information</span>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close drawer"
                  className="text-gray-500 hover:text-red-500 transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-4 overflow-y-auto flex-1 space-y-6">
                {children}
              </div>

            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
