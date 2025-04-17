import { Home,  Settings, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
        <button
          onClick={() => navigate('/home')}
          className={`flex flex-col items-center ${
            location.pathname === '/home' ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </button>
        {/* <button
          onClick={() => navigate('/topics')}
          className={`flex flex-col items-center ${
            location.pathname.includes('/topics') ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <BookOpen size={24} />
          <span className="text-xs mt-1">Topics</span>
        </button> */}
        <button
          onClick={() => navigate('/about')}
          className={`flex flex-col items-center ${
            location.pathname === '/about' ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <User size={24} />
          <span className="text-xs mt-1">About</span>
        </button>
        <button
          onClick={() => navigate('/settings')}
          className={`flex flex-col items-center ${
            location.pathname === '/settings' ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <Settings size={24} />
          <span className="text-xs mt-1">Settings</span>
        </button>
      </div>
    </div>
  );
}