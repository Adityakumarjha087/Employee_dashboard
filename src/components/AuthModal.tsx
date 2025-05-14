import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalProps {
  open: boolean;
  mode: 'signin' | 'signup';
  onClose: () => void;
}

const bgImage =
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80'; // Office background

export default function AuthModal({ open, mode, onClose }: AuthModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={backdropRef}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={handleBackdropClick}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            className="relative z-10 bg-white/95 dark:bg-[#181818]/95 rounded-3xl shadow-2xl p-12 w-full max-w-xl mx-4 flex flex-col gap-8 animate-fade-in border border-gray-200 dark:border-gray-800"
            style={{ fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
          >
            <button
              className="absolute top-5 right-6 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-3xl font-bold focus:outline-none"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-3xl font-extrabold text-center mb-2 tracking-tight text-gray-900 dark:text-white">
              {mode === 'signin' ? 'Sign In to Your Account' : 'Create a New Account'}
            </h2>
            {/* Placeholder for forms */}
            <form className="flex flex-col gap-5 mt-2">
              {mode === 'signup' && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90"
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-colors mt-2 shadow-md"
              >
                {mode === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
            <div className="text-center text-base text-gray-500 mt-2">
              {mode === 'signin' ? (
                <>
                  New here?{' '}
                  <button className="text-blue-600 hover:underline font-semibold" type="button" onClick={() => onClose() /* Will be replaced to switch mode */}>
                    Create an account
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button className="text-blue-600 hover:underline font-semibold" type="button" onClick={() => onClose() /* Will be replaced to switch mode */}>
                    Sign in
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 