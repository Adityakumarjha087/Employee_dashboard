"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaBuilding, FaBriefcase, FaGoogle, FaGithub } from 'react-icons/fa';
import { registerUser } from '../utils/userManagement';

const bgImage = 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2000&q=80';

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    department: '',
    jobTitle: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const success = registerUser(form);
      if (success) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('currentUser', JSON.stringify(form));
        router.push('/dashboard');
      } else {
        setError('Email already registered. Please sign in.');
      }
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative font-sans"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-[2px]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white/95 dark:bg-[#181818]/95 rounded-3xl shadow-2xl p-12 w-full max-w-2xl mx-4 flex flex-col gap-8 border border-gray-200 dark:border-gray-800"
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-2 tracking-tight text-gray-900 dark:text-white">
            Create Your Account
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Join us and start managing your work efficiently
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                placeholder="Full Name"
                required
                autoComplete="off"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                placeholder="Email Address"
                required
                autoComplete="off"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                placeholder="Password"
                required
                autoComplete="off"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                placeholder="Phone Number"
                required
                autoComplete="off"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBuilding className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                name="department"
                value={form.department}
                onChange={handleChange}
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                placeholder="Department"
                required
                autoComplete="off"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBriefcase className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange}
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                placeholder="Job Title"
                required
                autoComplete="off"
              />
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-center text-sm font-medium bg-red-50 dark:bg-red-900/20 py-2 px-4 rounded-lg"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Creating account...</span>
              </div>
            ) : (
              'Create Account'
            )}
          </motion.button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-[#181818] text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#23272f] hover:bg-gray-50 dark:hover:bg-[#2a2f3a] transition-colors"
          >
            <FaGoogle className="text-red-500" />
            <span className="font-medium">Google</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#23272f] hover:bg-gray-50 dark:hover:bg-[#2a2f3a] transition-colors"
          >
            <FaGithub className="text-gray-900 dark:text-white" />
            <span className="font-medium">GitHub</span>
          </motion.button>
        </div>

        <div className="text-center text-base text-gray-500">
          Already have an account?{' '}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            onClick={() => router.push('/signin')}
          >
            Sign in
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
} 