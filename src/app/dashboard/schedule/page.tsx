"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaPlus, FaSearch, FaClock, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const events = [
  {
    id: "EVT001",
    title: "Team Meeting",
    type: "Meeting",
    date: "2024-03-01",
    time: "10:00 AM - 11:00 AM",
    location: "Conference Room A",
    attendees: ["John Doe", "Jane Smith", "Mike Johnson"],
    status: "Upcoming"
  },
  {
    id: "EVT002",
    title: "Project Review",
    type: "Review",
    date: "2024-03-02",
    time: "02:00 PM - 03:30 PM",
    location: "Virtual Meeting",
    attendees: ["John Doe", "Sarah Wilson"],
    status: "Upcoming"
  },
  {
    id: "EVT003",
    title: "Training Session",
    type: "Training",
    date: "2024-03-03",
    time: "09:00 AM - 12:00 PM",
    location: "Training Room",
    attendees: ["All Team Members"],
    status: "Upcoming"
  },
  {
    id: "EVT004",
    title: "Client Presentation",
    type: "Presentation",
    date: "2024-03-04",
    time: "11:00 AM - 12:30 PM",
    location: "Client Office",
    attendees: ["John Doe", "Jane Smith"],
    status: "Upcoming"
  }
];

const upcomingEvents = [
  {
    id: "UEVT001",
    title: "Weekly Standup",
    date: "Today",
    time: "09:00 AM"
  },
  {
    id: "UEVT002",
    title: "Project Deadline",
    date: "Tomorrow",
    time: "05:00 PM"
  },
  {
    id: "UEVT003",
    title: "Team Building",
    date: "Mar 5",
    time: "02:00 PM"
  }
];

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "Meeting":
      return "bg-blue-500/10 text-blue-500";
    case "Review":
      return "bg-purple-500/10 text-purple-500";
    case "Training":
      return "bg-green-500/10 text-green-500";
    case "Presentation":
      return "bg-orange-500/10 text-orange-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

export default function SchedulePage() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#222b3a] rounded-2xl p-8 mb-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Schedule Management</h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaPlus />
            <span>Add Event</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <div className="bg-[#181f2a] rounded-xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Calendar</h2>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 py-1 bg-[#222b3a] text-white rounded-lg hover:bg-[#1a2332] transition-colors"
                  >
                    Month
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 py-1 bg-[#222b3a] text-white rounded-lg hover:bg-[#1a2332] transition-colors"
                  >
                    Week
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 py-1 bg-[#222b3a] text-white rounded-lg hover:bg-[#1a2332] transition-colors"
                  >
                    Day
                  </motion.button>
                </div>
              </div>
              <div className="aspect-square bg-[#222b3a] rounded-lg">
                {/* Calendar component would go here */}
                <div className="h-full flex items-center justify-center text-gray-400">
                  Calendar View
                </div>
              </div>
            </div>

            <div className="bg-[#181f2a] rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-4 p-4 bg-[#222b3a] rounded-lg"
                  >
                    <div className="p-3 rounded-lg bg-blue-500/10">
                      <FaCalendarAlt className="text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{event.title}</div>
                      <div className="text-sm text-gray-400">{event.date} at {event.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Events List Section */}
          <div className="lg:col-span-1">
            <div className="bg-[#181f2a] rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">All Events</h2>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="pl-10 pr-4 py-2 bg-[#222b3a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {events.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-[#222b3a] rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                      <span className="text-sm text-gray-400">{event.date}</span>
                    </div>
                    <h3 className="font-medium text-white mb-2">{event.title}</h3>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaClock />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers />
                        <span>{event.attendees.length} attendees</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 