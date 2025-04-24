import { motion } from "framer-motion";

type Tab = {
  id: string;
  label: string;
};

type TabGroupProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export default function TabGroup({
  tabs,
  activeTab,
  onTabChange,
}: TabGroupProps) {
  return (
    <div className="relative flex space-x-8 border-b border-transparent">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
            activeTab === tab.id
              ? "text-black dark:text-white"
              : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
              layoutId="underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
