import React from 'react';
import Navbar from './Navbar';

// Demo component showing how to use the Navbar
const Demo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Include the Navbar */}
      <Navbar />
      
      {/* Demo content */}
      <div className="pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Flexible Navbar Demo
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Features Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">✨ Animations</h3>
                <p className="text-gray-600 dark:text-gray-400">Smooth hover effects with Framer Motion</p>
                
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">🌙 Theme Toggle</h3>
                <p className="text-gray-600 dark:text-gray-400">Switch between light and dark modes</p>
                
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">📱 Responsive</h3>
                <p className="text-gray-600 dark:text-gray-400">Adapts to different screen sizes</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">♿ Accessible</h3>
                <p className="text-gray-600 dark:text-gray-400">Full keyboard navigation support</p>
                
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">🎭 Custom Logo</h3>
                <p className="text-gray-600 dark:text-gray-400">Animated logo with expanding text</p>
                
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">🔧 Customizable</h3>
                <p className="text-gray-600 dark:text-gray-400">Easy to modify colors and layout</p>
              </div>
            </div>
          </div>
          
          <div className="text-gray-600 dark:text-gray-400">
            <p className="mb-4">
              Hover over the navigation items to see the smooth animations in action.
            </p>
            <p>
              Try clicking the theme toggle button to switch between light and dark modes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

