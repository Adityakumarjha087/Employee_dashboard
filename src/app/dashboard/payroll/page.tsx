"use client";
import { motion } from "framer-motion";
import { FaDownload, FaFilter, FaSearch, FaMoneyBillWave } from "react-icons/fa";

const payrollData = [
  {
    id: "PAY001",
    employee: "John Doe",
    position: "Senior Developer",
    salary: 8500,
    bonus: 1200,
    deductions: 850,
    netAmount: 8850,
    status: "Paid",
    date: "2024-03-01"
  },
  {
    id: "PAY002",
    employee: "Jane Smith",
    position: "Product Manager",
    salary: 9200,
    bonus: 1500,
    deductions: 920,
    netAmount: 9780,
    status: "Paid",
    date: "2024-03-01"
  },
  {
    id: "PAY003",
    employee: "Mike Johnson",
    position: "UI/UX Designer",
    salary: 7800,
    bonus: 1000,
    deductions: 780,
    netAmount: 8020,
    status: "Pending",
    date: "2024-03-01"
  },
  {
    id: "PAY004",
    employee: "Sarah Wilson",
    position: "HR Manager",
    salary: 8900,
    bonus: 1300,
    deductions: 890,
    netAmount: 9310,
    status: "Paid",
    date: "2024-03-01"
  }
];

const summaryStats = [
  { label: "Total Payroll", value: "$35,960", change: "+5.2%", color: "green" },
  { label: "Pending Payments", value: "$8,020", change: "-2.1%", color: "orange" },
  { label: "Average Salary", value: "$8,600", change: "+3.4%", color: "blue" },
  { label: "Total Employees", value: "4", change: "+1", color: "purple" }
];

export default function PayrollPage() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#222b3a] rounded-2xl p-8 mb-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Payroll Management</h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaDownload />
            <span>Export Report</span>
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
                  <FaMoneyBillWave className={`text-${stat.color}-500 text-xl`} />
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
              placeholder="Search payroll records..."
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
                <th className="pb-4">Salary</th>
                <th className="pb-4">Bonus</th>
                <th className="pb-4">Deductions</th>
                <th className="pb-4">Net Amount</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Date</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {payrollData.map((record) => (
                <motion.tr
                  key={record.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-t border-[#181f2a]"
                >
                  <td className="py-4">{record.employee}</td>
                  <td className="py-4">{record.position}</td>
                  <td className="py-4">${record.salary.toLocaleString()}</td>
                  <td className="py-4">${record.bonus.toLocaleString()}</td>
                  <td className="py-4">${record.deductions.toLocaleString()}</td>
                  <td className="py-4">${record.netAmount.toLocaleString()}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      record.status === "Paid"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-yellow-500/10 text-yellow-500"
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="py-4">{record.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
} 