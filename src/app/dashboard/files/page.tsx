"use client";
import { motion } from "framer-motion";
import { FaFolder, FaUpload, FaSearch, FaFilter, FaDownload, FaTrash } from "react-icons/fa";

const files = [
  {
    id: "FILE001",
    name: "Q1 Financial Report.pdf",
    type: "pdf",
    size: "2.4 MB",
    uploadedBy: "John Doe",
    uploadDate: "2024-02-28",
    category: "Finance"
  },
  {
    id: "FILE002",
    name: "Employee Handbook.docx",
    type: "doc",
    size: "1.8 MB",
    uploadedBy: "Sarah Wilson",
    uploadDate: "2024-02-27",
    category: "HR"
  },
  {
    id: "FILE003",
    name: "Project Timeline.xlsx",
    type: "xls",
    size: "3.2 MB",
    uploadedBy: "Jane Smith",
    uploadDate: "2024-02-26",
    category: "Projects"
  },
  {
    id: "FILE004",
    name: "Company Logo.png",
    type: "img",
    size: "4.5 MB",
    uploadedBy: "Mike Johnson",
    uploadDate: "2024-02-25",
    category: "Design"
  }
];

const folders = [
  {
    id: "FOLDER001",
    name: "Finance Documents",
    files: 12,
    lastModified: "2024-02-28",
    category: "Finance"
  },
  {
    id: "FOLDER002",
    name: "HR Policies",
    files: 8,
    lastModified: "2024-02-27",
    category: "HR"
  },
  {
    id: "FOLDER003",
    name: "Project Files",
    files: 15,
    lastModified: "2024-02-26",
    category: "Projects"
  },
  {
    id: "FOLDER004",
    name: "Design Assets",
    files: 24,
    lastModified: "2024-02-25",
    category: "Design"
  }
];

const getFileIcon = (type: string) => {
  switch (type) {
    case "pdf":
      return "📄";
    case "doc":
      return "📝";
    case "xls":
      return "📊";
    case "img":
      return "🖼️";
    default:
      return "📁";
  }
};

export default function FilesPage() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#222b3a] rounded-2xl p-8 mb-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">File Management</h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaUpload />
            <span>Upload Files</span>
          </motion.button>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search files and folders..."
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

        {/* Folders Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Folders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {folders.map((folder) => (
              <motion.div
                key={folder.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#181f2a] rounded-xl p-4 cursor-pointer hover:bg-[#1a2332] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaFolder className="text-yellow-500 text-2xl" />
                  <div>
                    <div className="font-medium text-white">{folder.name}</div>
                    <div className="text-sm text-gray-400">{folder.files} files</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">Last modified: {folder.lastModified}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Files Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Recent Files</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="pb-4">Name</th>
                  <th className="pb-4">Category</th>
                  <th className="pb-4">Size</th>
                  <th className="pb-4">Uploaded By</th>
                  <th className="pb-4">Upload Date</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {files.map((file) => (
                  <motion.tr
                    key={file.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-t border-[#181f2a]"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{getFileIcon(file.type)}</span>
                        <div>
                          <div className="font-medium">{file.name}</div>
                          <div className="text-sm text-gray-400">.{file.type}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">{file.category}</td>
                    <td className="py-4">{file.size}</td>
                    <td className="py-4">{file.uploadedBy}</td>
                    <td className="py-4">{file.uploadDate}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#181f2a] transition-colors"
                        >
                          <FaDownload />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-[#181f2a] transition-colors"
                        >
                          <FaTrash />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 