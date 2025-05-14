"use client";
import { motion } from "framer-motion";
import { FaChartLine, FaStar, FaFilter, FaSearch, FaUserPlus } from "react-icons/fa";

const performanceData = [
  {
    id: "PERF001",
    employee: "John Doe",
    position: "Senior Developer",
    department: "Engineering",
    rating: 4.5,
    projects: 8,
    tasksCompleted: 45,
    attendance: 98,
    lastReview: "2024-02-15",
    status: "Exceeding"
  },
  {
    id: "PERF002",
    employee: "Jane Smith",
    position: "Product Manager",
    department: "Product",
    rating: 4.8,
    projects: 6,
    tasksCompleted: 38,
    attendance: 95,
    lastReview: "2024-02-20",
    status: "Outstanding"
  },
  {
    id: "PERF003",
    employee: "Mike Johnson",
    position: "UI/UX Designer",
    department: "Design",
    rating: 4.2,
    projects: 7,
    tasksCompleted: 42,
    attendance: 92,
    lastReview: "2024-02-10",
    status: "Meeting"
  },
  {
    id: "PERF004",
    employee: "Sarah Wilson",
    position: "HR Manager",
    department: "Human Resources",
    rating: 4.6,
    projects: 5,
    tasksCompleted: 35,
    attendance: 96,
    lastReview: "2024-02-25",
    status: "Exceeding"
  }
];

const summaryStats = [
  { label: "Average Rating", value: "4.5", change: "+0.2", color: "green" },
  { label: "Total Projects", value: "26", change: "+4", color: "blue" },
  { label: "Tasks Completed", value: "160", change: "+12", color: "purple" },
  { label: "Attendance Rate", value: "95.2%", change: "+1.5%", color: "orange" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Outstanding":
      return "bg-purple-500/10 text-purple-500";
    case "Exceeding":
      return "bg-green-500/10 text-green-500";
    case "Meeting":
      return "bg-blue-500/10 text-blue-500";
    case "Needs Improvement":
      return "bg-red-500/10 text-red-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

export default function PerformancePage() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#222b3a] rounded-2xl p-8 mb-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Performance Management</h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaUserPlus />
            <span>Schedule Review</span>
          </motion.button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#181f2a] rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-500/10`}>
                  <FaChartLine className={`text-${stat.color}-500 text-xl`} />
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

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search performance records..."
              className="w-full pl-10 pr-4 py-2 bg-[#181f2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-[#181f2a] text-white rounded-lg hover:bg-[#1a2332] transition-colors"
          >
            <FaFilter />
            <span>Filter</span>
          </motion.button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 text-sm">
                <th className="pb-4">Employee</th>
                <th className="pb-4">Position</th>
                <th className="pb-4">Rating</th>
                <th className="pb-4">Projects</th>
                <th className="pb-4">Tasks</th>
                <th className="pb-4">Attendance</th>
                <th className="pb-4">Last Review</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {performanceData.map((record) => (
                <motion.tr
                  key={record.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-t border-[#181f2a]"
                >
                  <td className="py-4">{record.employee}</td>
                  <td className="py-4">{record.position}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-1">
                      <span>{record.rating}</span>
                      <FaStar className="text-yellow-500" />
                    </div>
                  </td>
                  <td className="py-4">{record.projects}</td>
                  <td className="py-4">{record.tasksCompleted}</td>
                  <td className="py-4">{record.attendance}%</td>
                  <td className="py-4">{record.lastReview}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
} 