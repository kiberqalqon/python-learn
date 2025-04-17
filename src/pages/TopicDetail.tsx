import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { pythonTopics } from '../data/topics';
import BottomNav from '../components/BottomNav';
import { useSettings } from '../context/SettingsContext';
import Iframe from 'react-iframe'
export default function TopicDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { settings } = useSettings();
  const topic = pythonTopics.find(t => t.id === id);

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <ArrowLeft size={24} className="text-gray-900 dark:text-white" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {topic.title}
            </h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-md mx-auto px-4 py-6">
        <div className="aspect-w-16 aspect-h-9 mb-6">
         
          <Iframe url={topic.videoUrl}
        width="400"
        height="320px"
        display="block"
        position="relative"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={topic.title}
        className="rounded-xl"/>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {topic.content}
          </p>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}