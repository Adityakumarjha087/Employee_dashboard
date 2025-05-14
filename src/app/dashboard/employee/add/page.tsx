"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaBriefcase, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";

const departments = [
  "Engineering",
  "Human Resources",
  "Sales",
  "Marketing",
  "Finance",
  "Operations",
  "Other"
];

export default function AddEmployeePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    salary: "",
    joinDate: "",
    status: "Active"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Generate a unique employee ID
    const employeeId = `EMP${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;

    // Create new employee object
    const newEmployee = {
      id: employeeId,
      ...form,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
    };

    // Get existing employees from localStorage
    const existingEmployees = localStorage.getItem("employees");
    const employees = existingEmployees ? JSON.parse(existingEmployees) : [];

    // Add new employee
    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard/employee");
    }, 1000);
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#222b3a] rounded-2xl p-8 mb-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Add New Employee</h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/dashboard/employee")}
            className="px-4 py-2 text-white hover:bg-[#181f2a] rounded-lg transition-colors"
          >
            Back to Employees
          </motion.button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBuilding className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBriefcase className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                name="position"
                value={form.position}
                onChange={handleChange}
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                placeholder="Position"
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMoneyBillWave className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="number"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                placeholder="Salary"
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="date"
                name="joinDate"
                value={form.joinDate}
                onChange={handleChange}
                className="pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                required
              />
            </div>

            <div className="relative group">
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="pl-4 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-[#23272f]/90 w-full transition-all duration-200"
                required
              >
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
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
                <span>Adding Employee...</span>
              </div>
            ) : (
              "Add Employee"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
} 