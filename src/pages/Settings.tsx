import { Moon, Sun } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import { useSettings } from '../context/SettingsContext';

export default function Settings() {
  const { settings, updateSettings } = useSettings();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        </div>
      </header>
      
      <main className="max-w-md mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Theme</h2>
            <div className="flex space-x-4">
              <button
                onClick={() => updateSettings({ theme: 'light' })}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  settings.theme === 'light'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Sun size={20} />
                <span>Light</span>
              </button>
              <button
                onClick={() => updateSettings({ theme: 'dark' })}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  settings.theme === 'dark'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Moon size={20} />
                <span>Dark</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}