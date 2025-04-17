import BottomNav from '../components/BottomNav';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">About Developer</h1>
        </div>
      </header>
      
      <main className="max-w-md mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="/james.jpg"
              alt="Developer"
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Obidjonov Farrux</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4"> Software Developer</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'React Native', 'Node.js', 'Django', 'PostgreSQL'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About Me</h3>
                <p className="text-gray-600 dark:text-gray-300">
                 Salom! Men 2019-yildan beri Kiberxavfsizlik bilan shug'ullanaman
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>Email: kiberqalqon@gmail.com</p>
                  <p>GitHub: @kiberqalqon</p>
                  <p>LinkedIn: /in/kiberqalqon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}