import React from "react";
import "sizing-utils/dist/index.css";
import "./App.css";

function App() {
  return (
    <div className="container container-lg">
      <header className="app-header">
        <h1 className="text-4xl font-bold text-center mb-8">
          Sizing Framework
        </h1>
        <p className="text-lg text-center mb-12">
          A comprehensive sizing system for modern web applications
        </p>
      </header>

      <main className="demo-container">
        {/* Container Sizes Section */}
        <section className="demo-section">
          <h2 className="section-title">Container Sizes</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="container container-xs bg-gray-100 p-4">
              <p>Container XS (320px)</p>
            </div>
            <div className="container container-sm bg-gray-100 p-4">
              <p>Container SM (384px)</p>
            </div>
            <div className="container container-md bg-gray-100 p-4">
              <p>Container MD (512px)</p>
            </div>
            <div className="container container-lg bg-gray-100 p-4">
              <p>Container LG (768px)</p>
            </div>
            <div className="container container-xl bg-gray-100 p-4">
              <p>Container XL (1024px)</p>
            </div>
            <div className="container container-2xl bg-gray-100 p-4">
              <p>Container 2XL (1152px)</p>
            </div>
            <div className="container container-3xl bg-gray-100 p-4">
              <p>Container 3XL (1280px)</p>
            </div>
            <div className="container container-4xl bg-gray-100 p-4">
              <p>Container 4XL (1440px)</p>
            </div>
            <div className="container container-5xl bg-gray-100 p-4">
              <p>Container 5XL (1600px)</p>
            </div>
          </div>
        </section>

        {/* Aspect Ratios Section */}
        <section className="demo-section">
          <h2 className="section-title">Aspect Ratios</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect aspect-square bg-gray-100">
              <div className="flex items-center justify-center">
                Square (1:1)
              </div>
            </div>
            <div className="aspect aspect-video bg-gray-100">
              <div className="flex items-center justify-center">
                Video (16:9)
              </div>
            </div>
            <div className="aspect aspect-video-vertical bg-gray-100">
              <div className="flex items-center justify-center">
                Video Vertical (9:16)
              </div>
            </div>
            <div className="aspect aspect-photo bg-gray-100">
              <div className="flex items-center justify-center">
                Photo (4:3)
              </div>
            </div>
            <div className="aspect aspect-photo-vertical bg-gray-100">
              <div className="flex items-center justify-center">
                Photo Vertical (3:4)
              </div>
            </div>
            <div className="aspect aspect-portrait bg-gray-100">
              <div className="flex items-center justify-center">
                Portrait (2:3)
              </div>
            </div>
            <div className="aspect aspect-landscape bg-gray-100">
              <div className="flex items-center justify-center">
                Landscape (3:2)
              </div>
            </div>
            <div className="aspect aspect-ultrawide bg-gray-100">
              <div className="flex items-center justify-center">
                Ultrawide (21:9)
              </div>
            </div>
            <div className="aspect aspect-golden bg-gray-100">
              <div className="flex items-center justify-center">
                Golden (1.618:1)
              </div>
            </div>
            <div className="aspect aspect-silver bg-gray-100">
              <div className="flex items-center justify-center">
                Silver (1.414:1)
              </div>
            </div>
          </div>
        </section>

        {/* Component Sizes Section */}
        <section className="demo-section">
          <h2 className="section-title">Component Sizes</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="demo-item">
              <h3 className="text-lg font-bold mb-4">Height Utilities</h3>
              <div className="space-y-4">
                <div className="h-2xs bg-blue-100">2XS (16px)</div>
                <div className="h-xs bg-blue-200">XS (24px)</div>
                <div className="h-sm bg-blue-300">SM (32px)</div>
                <div className="h-base bg-blue-400">Base (40px)</div>
                <div className="h-md bg-blue-500">MD (48px)</div>
                <div className="h-lg bg-blue-600">LG (56px)</div>
                <div className="h-xl bg-blue-700">XL (64px)</div>
                <div className="h-2xl bg-blue-800">2XL (80px)</div>
                <div className="h-3xl bg-blue-900">3XL (96px)</div>
              </div>
            </div>
            <div className="demo-item">
              <h3 className="text-lg font-bold mb-4">Width Utilities</h3>
              <div className="space-y-4">
                <div className="w-2xs bg-green-100">2XS (16px)</div>
                <div className="w-xs bg-green-200">XS (24px)</div>
                <div className="w-sm bg-green-300">SM (32px)</div>
                <div className="w-base bg-green-400">Base (40px)</div>
                <div className="w-md bg-green-500">MD (48px)</div>
                <div className="w-lg bg-green-600">LG (56px)</div>
                <div className="w-xl bg-green-700">XL (64px)</div>
                <div className="w-2xl bg-green-800">2XL (80px)</div>
                <div className="w-3xl bg-green-900">3XL (96px)</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Special Sizes</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="demo-item">
                <h4 className="text-md font-bold mb-2">Viewport Sizes</h4>
                <div className="space-y-4">
                  <div className="h-screen bg-purple-100">Screen Height</div>
                  <div className="w-screen bg-purple-200">Screen Width</div>
                </div>
              </div>
              <div className="demo-item">
                <h4 className="text-md font-bold mb-2">Content Sizes</h4>
                <div className="space-y-4">
                  <div className="h-min bg-yellow-100">Min Height</div>
                  <div className="h-max bg-yellow-200">Max Height</div>
                  <div className="h-fit bg-yellow-300">Fit Height</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Common Elements</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="demo-item">
                <h4 className="text-md font-bold mb-2">Icons</h4>
                <div className="flex items-center space-x-4">
                  <div className="icon-xs bg-gray-200"></div>
                  <div className="icon-sm bg-gray-300"></div>
                  <div className="icon-md bg-gray-400"></div>
                  <div className="icon-lg bg-gray-500"></div>
                  <div className="icon-xl bg-gray-600"></div>
                </div>
              </div>
              <div className="demo-item">
                <h4 className="text-md font-bold mb-2">Avatars</h4>
                <div className="flex items-center space-x-4">
                  <div className="avatar-xs rounded-full bg-gray-200"></div>
                  <div className="avatar-sm rounded-full bg-gray-300"></div>
                  <div className="avatar-md rounded-full bg-gray-400"></div>
                  <div className="avatar-lg rounded-full bg-gray-500"></div>
                  <div className="avatar-xl rounded-full bg-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p className="text-center text-sm text-gray-600">
          Sizing Framework Demo - Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
