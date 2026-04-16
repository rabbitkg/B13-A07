'use client';
import { useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 z-50 bg-[#244D3F] text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in">
      <span>✅ {message}</span>
      <button onClick={onClose} className="ml-2 text-white font-bold">✕</button>
    </div>
  );
};

export default Toast;