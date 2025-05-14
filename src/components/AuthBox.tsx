import { FaUserCircle } from 'react-icons/fa';

type AuthBoxProps = {
  onOpen: (mode: 'signin' | 'signup') => void;
};

export default function AuthBox({ onOpen }: AuthBoxProps) {
  return (
    <div className="bg-white/80 dark:bg-[#181818]/80 shadow-lg rounded-2xl p-8 flex flex-col gap-6 w-full max-w-xs mx-auto mt-8 border border-gray-100 dark:border-gray-800">
      <div className="flex flex-col items-center gap-2">
        <FaUserCircle className="text-4xl text-blue-600 dark:text-blue-400 mb-1" />
        <h2 className="text-xl font-semibold text-center mb-1">Welcome!</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-2">Access your personalized dashboard or join our platform today.</p>
      </div>
      <button
        className="w-full py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors mb-2 shadow-sm"
        onClick={() => onOpen('signin')}
      >
        Sign In
      </button>
      <div className="flex items-center gap-2 my-1">
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      <button
        className="w-full py-2 px-4 rounded border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 font-medium transition-colors shadow-sm"
        onClick={() => onOpen('signup')}
      >
        Sign Up
      </button>
    </div>
  );
} 