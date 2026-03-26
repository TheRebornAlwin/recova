"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  { name: "Sarah", city: "Plano, TX" },
  { name: "Marcus", city: "Littleton, CO" },
  { name: "Jessica", city: "Hoboken, NJ" },
  { name: "David", city: "Bend, OR" },
  { name: "Emily", city: "Naperville, IL" },
  { name: "Ryan", city: "Carlsbad, CA" },
  { name: "Amanda", city: "Franklin, TN" },
  { name: "Tyler", city: "Redmond, WA" },
  { name: "Lauren", city: "Coral Springs, FL" },
  { name: "Chris", city: "Gilbert, AZ" },
  { name: "Megan", city: "Cary, NC" },
  { name: "Jordan", city: "Beaverton, OR" },
  { name: "Priya", city: "Alpharetta, GA" },
  { name: "Derek", city: "Overland Park, KS" },
  { name: "Olivia", city: "Folsom, CA" },
  { name: "Hassan", city: "Eagan, MN" },
  { name: "Sophie", city: "Leesburg, VA" },
  { name: "Alex", city: "Broken Arrow, OK" },
  { name: "Tanya", city: "Roswell, GA" },
  { name: "Brandon", city: "Huntersville, NC" },
  { name: "Lisa", city: "Westfield, IN" },
  { name: "Kevin", city: "Cedar Park, TX" },
  { name: "Nina", city: "Murfreesboro, TN" },
  { name: "Liam", city: "Bothell, WA" },
  { name: "Jade", city: "Cheshire, CT" },
  { name: "Carlos", city: "Katy, TX" },
  { name: "Anna", city: "Gig Harbor, WA" },
  { name: "Mike", city: "Papillion, NE" },
  { name: "Zara", city: "Chandler, AZ" },
  { name: "Tom", city: "Flower Mound, TX" },
];

const timeAgo = [
  "2 minutes ago",
  "5 minutes ago",
  "8 minutes ago",
  "12 minutes ago",
  "3 minutes ago",
  "6 minutes ago",
  "1 minute ago",
  "9 minutes ago",
  "4 minutes ago",
  "7 minutes ago",
];

export default function PurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const showDelay = 8000;
    const interval = 35000;

    const firstTimeout = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, showDelay);

    const recurring = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, interval);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(recurring);
    };
  }, []);

  const notification = notifications[index];
  const time = timeAgo[index % timeAgo.length];
  const initial = notification.name.charAt(0);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 right-4 z-40 max-w-xs w-full"
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-center gap-3 border-l-4 border-l-teal">
            <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-teal">{initial}</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm text-navy font-medium leading-snug">
                <span className="font-bold">{notification.name}</span> from {notification.city} just purchased{" "}
                <span className="text-teal font-semibold">NeckRelieve Pulse</span>
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">{time}</p>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="text-gray-300 hover:text-gray-500 transition-colors flex-shrink-0 cursor-pointer"
              aria-label="Dismiss"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
