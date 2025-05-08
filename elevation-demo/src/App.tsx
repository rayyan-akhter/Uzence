import React from "react";
import "elevation-utils/dist/index.css";
import "./App.css";

function App() {
  return (
    <div className="container container-lg">
      <header className="app-header">
        <h1 className="text-4xl font-bold text-center mb-8">
          Elevation Framework
        </h1>
        <p className="text-lg text-center mb-12">
          A comprehensive elevation system for modern web applications
        </p>
      </header>

      <main className="demo-container">
        {/* Elevation Tokens Section */}
        <section className="demo-section">
          <h2 className="section-title">Elevation Tokens</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="demo-item">
              <h3 className="text-lg font-bold mb-4">Opacity</h3>
              <div className="space-y-4">
                <div className="bg-blue-100 p-4" style={{ opacity: 0 }}>Opacity 0</div>
                <div className="bg-blue-200 p-4" style={{ opacity: 0.25 }}>Opacity 25%</div>
                <div className="bg-blue-300 p-4" style={{ opacity: 0.5 }}>Opacity 50%</div>
                <div className="bg-blue-400 p-4" style={{ opacity: 0.75 }}>Opacity 75%</div>
                <div className="bg-blue-500 p-4" style={{ opacity: 1 }}>Opacity 100%</div>
              </div>
            </div>
            <div className="demo-item">
              <h3 className="text-lg font-bold mb-4">Overlay</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>Light Overlay</div>
                <div className="bg-gray-200 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>Dark Overlay</div>
              </div>
            </div>
            <div className="demo-item">
              <h3 className="text-lg font-bold mb-4">Shadow</h3>
              <div className="space-y-4">
                <div className="bg-white p-4" style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>Shadow SM</div>
                <div className="bg-white p-4" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Shadow MD</div>
                <div className="bg-white p-4" style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}>Shadow LG</div>
                <div className="bg-white p-4" style={{ boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)' }}>Shadow XL</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p className="text-center text-sm text-gray-600">
          Elevation Framework Demo - Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
