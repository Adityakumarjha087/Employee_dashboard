"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaBriefcase, FaEdit } from "react-icons/fa";

interface UserInfo {
  name: string;
  email: string;
  role: string;
  department: string;
  joinDate: string;
  avatar?: string;
  phone: string;
  jobTitle: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("auth") !== "true") {
        router.push("/signin");
      } else {
        const user = localStorage.getItem("user");
        if (user) {
          setUserInfo(JSON.parse(user));
        }
      }
    }
  }, [router]);

  if (!userInfo) {
    return (
      <div className="min-h-screen bg-[#181f2a] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#181f2a] p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-[#222b3a] rounded-2xl p-8 mb-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Profile Information</h1>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaEdit />
              <span>Edit Profile</span>
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#181f2a] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <FaUser className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Full Name</div>
                    <div className="text-white font-medium text-lg">{userInfo.name}</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#181f2a] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-green-500/10">
                    <FaEnvelope className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email Address</div>
                    <div className="text-white font-medium text-lg">{userInfo.email}</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#181f2a] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <FaPhone className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone Number</div>
                    <div className="text-white font-medium text-lg">{userInfo.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#181f2a] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-orange-500/10">
                    <FaBuilding className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Department</div>
                    <div className="text-white font-medium text-lg">{userInfo.department}</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#181f2a] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10">
                    <FaBriefcase className="text-yellow-500 text-xl" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Job Title</div>
                    <div className="text-white font-medium text-lg">{userInfo.jobTitle}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/dashboard")}
            className="px-6 py-3 bg-[#222b3a] text-white rounded-lg hover:bg-[#1a2332] transition-colors"
          >
            Back to Dashboard
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
} 