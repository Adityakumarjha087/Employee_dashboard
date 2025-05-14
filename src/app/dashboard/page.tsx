"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FaChartLine, 
  FaUsers, 
  FaUserPlus, 
  FaMoneyBillWave, 
  FaChartBar, 
  FaCalendarAlt, 
  FaFolder, 
  FaCalendarCheck,
  FaBell,
  FaSearch,
  FaEllipsisV
} from "react-icons/fa";
import { getCurrentUser } from '../utils/userManagement';

const stats = [
  { label: "Total Employees", value: "1,285", icon: FaUsers, change: "+12%", color: "blue" },
  { label: "Active Projects", value: "47", icon: FaChartLine, change: "+5%", color: "green" },
  { label: "Pending Tasks", value: "124", icon: FaCalendarCheck, change: "-8%", color: "orange" },
  { label: "Total Revenue", value: "$2.4M", icon: FaMoneyBillWave, change: "+23%", color: "purple" },
];

const recentActivities = [
  { type: "New Employee", description: "John Doe joined the Marketing team", time: "2 hours ago", icon: FaUserPlus },
  { type: "Project Update", description: "Website Redesign milestone completed", time: "4 hours ago", icon: FaChartBar },
  { type: "Task Assigned", description: "New task assigned to Sarah Smith", time: "5 hours ago", icon: FaCalendarAlt },
  { type: "File Upload", description: "Q2 Report uploaded by Finance team", time: "6 hours ago", icon: FaFolder },
];

const sidebarItems = [
  { name: "Dashboard", icon: FaChartLine, path: "/dashboard" },
  { name: "Employee", icon: FaUsers, path: "/dashboard/employee" },
  { name: "Hiring", icon: FaUserPlus, path: "/dashboard/hiring" },
  { name: "Payroll", icon: FaMoneyBillWave, path: "/dashboard/payroll" },
  { name: "Performance", icon: FaChartBar, path: "/dashboard/performance" },
  { name: "Attendance", icon: FaCalendarAlt, path: "/dashboard/attendance" },
  { name: "Files", icon: FaFolder, path: "/dashboard/files" },
  { name: "Schedule", icon: FaCalendarCheck, path: "/dashboard/schedule" },
];

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface UserInfo {
  name?: string;
  email?: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [notifications] = useState<Notification[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("auth") !== "true") {
        router.push("/signin");
      } else {
        const user = localStorage.getItem("user");
        if (user) {
          setUserInfo(JSON.parse(user));
          setUser(JSON.parse(user));
        }
      }
    }
  }, [router]);

  const handleSidebarClick = (item: typeof sidebarItems[0]) => {
    setActiveSection(item.name);
    router.push(item.path);
  };

  return (
    <div className="flex min-h-screen bg-[#181f2a]">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className="w-64 bg-[#1a2332] text-white p-6 flex flex-col justify-between"
      >
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold text-2xl mb-1"
          >
            Zenwork
          </motion.div>
          <div className="text-sm text-gray-400 mb-8">{userInfo?.email || "Loading..."}</div>
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSidebarClick(item)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.name 
                    ? "bg-[#222b3a] text-white" 
                    : "text-gray-400 hover:bg-[#222b3a] hover:text-white"
                }`}
              >
                <item.icon className="text-lg" />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </nav>
        </div>
        <div>
          <div className="text-sm text-gray-400 mb-2">Get Pro Access</div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Try Pro
          </motion.button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar */}
        <header className="bg-[#222b3a] p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#181f2a] text-white pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-400 hover:text-white"
            >
              <FaBell className="text-xl" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/profile")}
              className="px-4 py-2 text-white hover:bg-[#181f2a] rounded-lg transition-colors"
            >
              Profile
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                localStorage.removeItem("auth");
                localStorage.removeItem("user");
                router.push("/signin");
              }}
              className="px-4 py-2 text-red-500 hover:bg-[#181f2a] rounded-lg transition-colors"
            >
              Logout
            </motion.button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2000&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {user?.name || 'User'}!</h1>
              <p className="text-blue-100">Here's what's happening with your projects today.</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#222b3a] rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${stat.color}-500/10`}>
                    <stat.icon className={`text-${stat.color}-500 text-xl`} />
                  </div>
                  <span className={`text-${stat.color}-500 text-sm font-medium`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#222b3a] rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-[#181f2a] rounded-lg"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <activity.icon className="text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{activity.description}</div>
                    <div className="text-sm text-gray-400">{activity.type}</div>
                  </div>
                  <div className="text-sm text-gray-400">{activity.time}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
} 