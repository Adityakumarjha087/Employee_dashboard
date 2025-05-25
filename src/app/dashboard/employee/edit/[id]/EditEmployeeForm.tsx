"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaUser, FaEnvelope, FaPhone, FaBuilding, FaBriefcase,
  FaMoneyBillWave, FaCalendarAlt, FaSpinner
} from "react-icons/fa";

interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  salary: string;
  joinDate: string;
  status: "Active" | "Inactive";
  avatar?: string;
}

interface EditEmployeeFormProps {
  id: string;
}

const departments = [
  "Engineering", "Design", "Marketing", "Sales",
  "Human Resources", "Finance", "Operations", "Customer Support"
];

export default function EditEmployeeForm({ id }: EditEmployeeFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<Employee>({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    salary: "",
    joinDate: "",
    status: "Active",
    avatar: ""
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const employee = employees.find((emp: Employee) => emp.id === id);

    if (employee) {
      setFormData(employee);
    } else {
      setError("Employee not found");
    }
    setLoading(false);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const employees = JSON.parse(localStorage.getItem("employees") || "[]");
      const updatedEmployees = employees.map((emp: Employee) =>
        emp.id === id ? formData : emp
      );
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push("/dashboard/employee");
    } catch (error) {
      setError("Failed to update employee");
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="text-4xl text-blue-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-500">
        <p className="text-xl mb-4">{error}</p>
        <button
          onClick={() => router.push("/dashboard/employee")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Back to Employee List
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#181818] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Edit Employee
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", name: "name", type: "text", icon: <FaUser />, placeholder: "John Doe" },
                { label: "Email Address", name: "email", type: "email", icon: <FaEnvelope />, placeholder: "john@example.com" },
                { label: "Phone Number", name: "phone", type: "tel", icon: <FaPhone />, placeholder: "+1 (555) 000-0000" },
                {
                  label: "Department", name: "department", type: "select", icon: <FaBuilding />,
                  options: departments
                },
                { label: "Position", name: "position", type: "text", icon: <FaBriefcase />, placeholder: "Software Engineer" },
                { label: "Salary", name: "salary", type: "text", icon: <FaMoneyBillWave />, placeholder: "$50,000" },
                { label: "Join Date", name: "joinDate", type: "date", icon: <FaCalendarAlt /> }
              ].map(({ label, name, type, icon, placeholder, options }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {label}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {icon}
                    </div>
                    {type === "select" ? (
  <select
    name={name}
    value={formData[name as keyof Employee]}
    onChange={handleChange}
    required
    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#2d2d2d] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="">Select Department</option>
    {options?.map((opt: string) => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
) : (
  <input
    type={type}
    name={name}
    value={formData[name as keyof Employee]}
    onChange={handleChange}
    required
    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#2d2d2d] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    placeholder={placeholder}
  />
)}

                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className={`px-6 py-2 rounded-lg text-white font-semibold transition-colors ${
                  submitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {submitting ? "Updating..." : "Update Employee"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
