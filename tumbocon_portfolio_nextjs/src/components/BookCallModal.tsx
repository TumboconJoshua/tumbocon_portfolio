"use client";

import { useEffect, useState } from "react";
import { X, Loader2 } from "lucide-react";

type BookCallModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsIframeLoaded(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl h-[80vh] min-h-[500px] bg-white dark:bg-[#18181B] border border-white/40 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-black/5 dark:border-white/10 shrink-0 bg-white/40 dark:bg-black/20">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white font-[family-name:var(--font-archivo)]">
            Schedule a Meeting
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Loading State or Iframe */}
        <div className="relative flex-1 bg-[#FAFAFA] dark:bg-white">
          {!isIframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-[#2563EB]">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          )}
          <iframe
            src="https://calendly.com/tumboconjoshua26?embed=1"
            width="100%"
            height="100%"
            frameBorder="0"
            className={`w-full h-full transition-opacity duration-300 ${isIframeLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setIsIframeLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
