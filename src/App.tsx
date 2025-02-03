import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-hi text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-xl text-gray-700">John Doe</a>
          <div className="flex gap-8 text-gray-600">
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Twitter</a>
            <a href="/resume.pdf" className="hover:text-gray-900 transition-colors">Resume</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl font-normal leading-tight">
              👋 Hey, I'm John
            </h1>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-600">
              I create digital experiences
            </h2>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid gap-24">
          <a href="#" className="block group">
            <div className="case-study-card relative bg-[#e8f1f1] rounded-3xl p-12 overflow-hidden">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=2000&q=80" 
                  alt="E-commerce Platform"
                  className="case-study-image w-full shadow-lg"
                />
              </div>
              <div className="mt-12">
                <h3 className="case-study-title text-4xl text-teal mb-4">experience design for a<br />mutual fund company</h3>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-teal font-medium text-xl mb-1">DCM ADVISORS</h4>
                    <p className="text-gray-600">HEAD OF DIGITAL EXPERIENCES</p>
                  </div>
                  <ExternalLink className="case-study-icon text-teal w-8 h-8" />
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="block group">
            <div className="case-study-card relative bg-[#f1f1e8] rounded-3xl p-12 overflow-hidden">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=2000&q=80" 
                  alt="Task Management System"
                  className="case-study-image w-full shadow-lg"
                />
              </div>
              <div className="mt-12">
                <h3 className="case-study-title text-4xl text-teal mb-4">reimagining digital<br />banking experiences</h3>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-teal font-medium text-xl mb-1">FINTECH CO</h4>
                    <p className="text-gray-600">DIGITAL EXPERIENCE DESIGNER</p>
                  </div>
                  <ExternalLink className="case-study-icon text-teal w-8 h-8" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© 2024 John Doe</p>
          <div className="flex gap-8">
            <a href="mailto:contact@example.com" className="hover:text-gray-900 transition-colors">
              contact@example.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;