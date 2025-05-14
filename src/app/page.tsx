"use client";
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaChartLine, FaShieldAlt, FaHeadset, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const corporateImages = [
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Team Collaboration"
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Modern Office"
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    title: "Business Meeting"
  },
  {
    url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Corporate Culture"
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % corporateImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % corporateImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + corporateImages.length) % corporateImages.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e0e7ef] via-[#f8fafc] to-[#c7d2fe] dark:from-[#181c24] dark:via-[#101010] dark:to-[#23272f]">
      <Navbar />
      <main className="flex-1 w-full">
        {/* HERO SECTION */}
        <section id="home" className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                className="w-full h-full relative"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={corporateImages[currentImageIndex].url}
                  alt={corporateImages[currentImageIndex].title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/90 to-[#1e293b]/70" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <FaChevronLeft className="text-white text-2xl" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <FaChevronRight className="text-white text-2xl" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {corporateImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="relative z-10 w-full max-w-4xl px-4 text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg"
            >
              Welcome to <span className="text-white">Zenwork</span> Employee Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
            >
              A modern platform to manage employees, projects, and performance efficiently.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 justify-center mt-8"
            >
              <Link
                href="/signup"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                Get Started
              </Link>
              <Link
                href="#about"
                className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">About Company</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Transforming the way businesses manage their workforce with innovative solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative bg-[#1e293b] rounded-2xl p-8 shadow-2xl">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                    <Image
                      src="/hero-image.jpg"
                      alt="Team collaboration"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-xl"
                      priority
                    />
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-500 mb-2">10+</div>
                      <div className="text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-500 mb-2">500+</div>
                      <div className="text-gray-400">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-[#1e293b] rounded-2xl p-6 hover:bg-[#2d3a4f] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <FaUsers className="text-2xl text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                      <p className="text-gray-400">
                        Our team consists of industry experts with years of experience in HR management and software development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1e293b] rounded-2xl p-6 hover:bg-[#2d3a4f] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                      <FaChartLine className="text-2xl text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Insights</h3>
                      <p className="text-gray-400">
                        Make informed decisions with our advanced analytics and reporting tools.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1e293b] rounded-2xl p-6 hover:bg-[#2d3a4f] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/10 rounded-xl">
                      <FaShieldAlt className="text-2xl text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
                      <p className="text-gray-400">
                        Your data is protected with enterprise-grade security and regular backups.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1e293b] rounded-2xl p-6 hover:bg-[#2d3a4f] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-500/10 rounded-xl">
                      <FaHeadset className="text-2xl text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                      <p className="text-gray-400">
                        Our dedicated support team is always ready to help you with any questions.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section id="benefits" className="w-full py-24 flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full px-4">
            <div className="bg-white dark:bg-[#181818] rounded-2xl shadow-xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Centralized Management", icon: "📊", desc: "All your HR and project data in one secure place." },
                  { title: "Real-time Tracking", icon: "⚡", desc: "Monitor employee and project status instantly." },
                  { title: "Performance Analytics", icon: "📈", desc: "Get actionable insights for better decisions." },
                  { title: "Secure Infrastructure", icon: "🔒", desc: "Enterprise-grade security for your data." }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 shadow-sm">
                    <span className="text-4xl mt-1">{benefit.icon}</span>
                    <div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{benefit.title}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-base">{benefit.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY SECTION */}
        <section id="company" className="w-full py-24 flex flex-col items-center justify-center bg-white/70 dark:bg-[#181818]/70 backdrop-blur-sm">
          <div className="max-w-4xl w-full px-4">
            <div className="bg-white dark:bg-[#181818] rounded-2xl shadow-xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                About Company
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                Our company is committed to delivering innovative solutions that empower businesses to achieve more. With a focus on user experience and security, we ensure your data is always protected.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-white/95 dark:bg-[#101010]/95 border-t border-gray-100 dark:border-gray-800 py-8 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
          <span className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300">
            &copy; {new Date().getFullYear()} Zenwork Corp. All rights reserved.
          </span>
          <span className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300">
            Made with Next.js & Tailwind CSS
          </span>
        </div>
      </footer>
    </div>
  );
}
