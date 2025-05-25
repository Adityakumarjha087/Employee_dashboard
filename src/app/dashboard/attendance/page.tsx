"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaFilter, FaSearch, FaUserClock } from "react-icons/fa";

const attendanceData = [
  {
    id: "ATT001",
    employee: "John Doe",
    position: "Senior Developer",
    department: "Engineering",
    date: "2024-03-01",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    status: "Present",
    hours: 9
  },
  {
    id: "ATT002",
    employee: "Jane Smith",
    position: "Product Manager",
    department: "Product",
    date: "2024-03-01",
    checkIn: "08:45 AM",
    checkOut: "05:30 PM",
    status: "Present",
    hours: 8.75
  },
  {
    id: "ATT003",
    employee: "Mike Johnson",
    position: "UI/UX Designer",
    department: "Design",
    date: "2024-03-01",
    checkIn: "09:30 AM",
    checkOut: "06:30 PM",
    status: "Late",
    hours: 9
  },
  {
    id: "ATT004",
    employee: "Sarah Wilson",
    position: "HR Manager",
    department: "Human Resources",
    date: "2024-03-01",
    checkIn: "09:15 AM",
    checkOut: "05:45 PM",
    status: "Present",
    hours: 8.5
  }
];

const summaryStats = [
  { label: "Present Today", value: "85%", change: "+5%", color: "green" },
  { label: "Late Arrivals", value: "12%", change: "-2%", color: "orange" },
  { label: "Absent", value: "3%", change: "-3%", color: "red" },
  { label: "Average Hours", value: "8.8", change: "+0.2", color: "blue" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Present":
      return "bg-green-500/10 text-green-500";
    case "Late":
      return "bg-orange-500/10 text-orange-500";
    case "Absent":
      return "bg-red-500/10 text-red-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

export default function AttendancePage() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#222b3a] rounded-2xl p-8 mb-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Attendance Management</h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaCalendarAlt />
            <span>View Calendar</span>
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
                  <FaUserClock className={`text-${stat.color}-500 text-xl`} />
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
              placeholder="Search attendance records..."
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
                <th className="pb-4">Date</th>
                <th className="pb-4">Check In</th>
                <th className="pb-4">Check Out</th>
                <th className="pb-4">Hours</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {attendanceData.map((record) => (
                <motion.tr
                  key={record.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-t border-[#181f2a]"
                >
                  <td className="py-4">{record.employee}</td>
                  <td className="py-4">{record.position}</td>
                  <td className="py-4">{record.date}</td>
                  <td className="py-4">{record.checkIn}</td>
                  <td className="py-4">{record.checkOut}</td>
                  <td className="py-4">{record.hours}</td>
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