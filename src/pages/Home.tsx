import { Link } from 'react-router-dom';
import { pythonTopics } from '../data/topics';
import BottomNav from '../components/BottomNav';
import { useSettings } from '../context/SettingsContext';

export default function Home() {
  const { settings } = useSettings();

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 ${
      settings.fontFamily === 'serif' ? 'font-serif' : 
      settings.fontFamily === 'mono' ? 'font-mono' : 'font-sans'
    }`}>
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Python Darslari</h1>
        </div>
      </header>
      
      <main className="max-w-md mx-auto px-4 py-6">
        <div className="grid gap-4">
          {pythonTopics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topics/${topic.id}`}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-200"
            >
              <h2 className={`font-bold text-gray-900 dark:text-white mb-2 ${
                settings.fontSize === 'small' ? 'text-lg' :
                settings.fontSize === 'large' ? 'text-2xl' : 'text-xl'
              }`}>
                {topic.title}
              </h2>
              <p className={`text-gray-600 dark:text-gray-300 ${
                settings.fontSize === 'small' ? 'text-sm' :
                settings.fontSize === 'large' ? 'text-lg' : 'text-base'
              }`}>
                {topic.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}