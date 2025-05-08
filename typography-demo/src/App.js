import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="text-4xl font-bold text-center mb-8">
          Typography Framework
        </h1>
        <p className="text-lg text-center mb-12">
          A comprehensive typography system for modern web applications
        </p>
      </header>

      <main className="demo-container">
        {/* Font Sizes Section */}
        <section className="demo-section">
          <h2 className="section-title">Font Sizes</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="demo-item">
              <p className="text-2xs">2xs (10px) - Tiny text for labels</p>
              <p className="text-xs">xs (12px) - Small text for captions</p>
              <p className="text-sm">
                sm (14px) - Small text for secondary content
              </p>
              <p className="text-base">base (16px) - Default body text</p>
              <p className="text-lg">lg (18px) - Large body text</p>
              <p className="text-xl">xl (20px) - Extra large text</p>
              <p className="text-2xl">2xl (24px) - Heading level 4</p>
              <p className="text-3xl">3xl (30px) - Heading level 3</p>
              <p className="text-4xl">4xl (36px) - Heading level 2</p>
            </div>
            <div className="demo-item">
              <p className="text-5xl">5xl (48px) - Large heading</p>
              <p className="text-6xl">6xl (60px) - Extra large heading</p>
              <p className="text-7xl">7xl (72px) - Hero text</p>
              <p className="text-8xl">8xl (96px) - Display text</p>
              <p className="text-9xl">9xl (128px) - Giant display text</p>
            </div>
          </div>
        </section>

        {/* Font Weights Section */}
        <section className="demo-section">
          <h2 className="section-title">Font Weights</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="demo-item">
              <p className="font-thin">Thin (100) - Ultra light weight</p>
              <p className="font-extralight">
                Extra Light (200) - Very light weight
              </p>
              <p className="font-light">Light (300) - Light weight</p>
              <p className="font-normal">Normal (400) - Regular weight</p>
            </div>
            <div className="demo-item">
              <p className="font-medium">Medium (500) - Medium weight</p>
              <p className="font-semibold">Semibold (600) - Semi bold weight</p>
              <p className="font-bold">Bold (700) - Bold weight</p>
              <p className="font-extrabold">
                Extra Bold (800) - Extra bold weight
              </p>
              <p className="font-black">Black (900) - Black weight</p>
            </div>
          </div>
        </section>

        {/* Line Heights Section */}
        <section className="demo-section">
          <h2 className="section-title">Line Heights</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="demo-item">
              <div className="line-height-demo">
                <p className="leading-none">
                  None (1) - Compact text
                  <br />
                  Second line to demonstrate
                  <br />
                  Third line to show spacing
                </p>
                <p className="leading-tight">
                  Tight (1.25) - Slightly compact
                  <br />
                  Second line to demonstrate
                  <br />
                  Third line to show spacing
                </p>
                <p className="leading-snug">
                  Snug (1.375) - Comfortable reading
                  <br />
                  Second line to demonstrate
                  <br />
                  Third line to show spacing
                </p>
                <p className="leading-normal">
                  Normal (1.5) - Standard line height
                  <br />
                  Second line to demonstrate
                  <br />
                  Third line to show spacing
                </p>
              </div>
            </div>
            <div className="demo-item">
              <div className="line-height-demo">
                <p className="leading-relaxed">
                  Relaxed (1.625) - More breathing room
                  <br />
                  Second line to demonstrate
                  <br />
                  Third line to show spacing
                </p>
                <p className="leading-loose">
                  Loose (2) - Very spacious
                  <br />
                  Second line to demonstrate
                  <br />
                  Third line to show spacing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Text Cases Section */}
        <section className="demo-section">
          <h2 className="section-title">Text Cases</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="demo-item">
              <p className="uppercase">uppercase - ALL CAPS TEXT</p>
              <p className="lowercase">lowercase - all lowercase text</p>
              <p className="capitalize">
                capitalize - First Letter Of Each Word
              </p>
              <p className="normal-case">normal-case - Regular text case</p>
            </div>
          </div>
        </section>

        {/* Text Decorations Section */}
        <section className="demo-section">
          <h2 className="section-title">Text Decorations</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="demo-item">
              <p className="no-underline">No decoration - Plain text</p>
              <p className="underline">Underline - Basic underline</p>
              <p className="underline-dotted">
                Underline dotted - Dotted style
              </p>
              <p className="underline-dashed">
                Underline dashed - Dashed style
              </p>
            </div>
            <div className="demo-item">
              <p className="underline-double">Underline double - Double line</p>
              <p className="underline-wavy">Underline wavy - Wavy style</p>
              <p className="line-through">Line through - Strikethrough text</p>
              <p className="overline">Overline - Text with overline</p>
            </div>
          </div>
        </section>

        {/* Paragraph Spacing Section */}
        <section className="demo-section">
          <h2 className="section-title">Paragraph Spacing</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="demo-item">
              <div className="paragraph-spacing-demo">
                <div className="space-y-0">
                  <p>No spacing between paragraphs</p>
                  <p>This is another paragraph</p>
                  <p>And one more paragraph</p>
                </div>
                <div className="space-y-4">
                  <p>Small spacing between paragraphs</p>
                  <p>This is another paragraph</p>
                  <p>And one more paragraph</p>
                </div>
              </div>
            </div>
            <div className="demo-item">
              <div className="paragraph-spacing-demo">
                <div className="space-y-8">
                  <p>Medium spacing between paragraphs</p>
                  <p>This is another paragraph</p>
                  <p>And one more paragraph</p>
                </div>
                <div className="space-y-12">
                  <p>Large spacing between paragraphs</p>
                  <p>This is another paragraph</p>
                  <p>And one more paragraph</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Font Families Section */}
        <section className="demo-section">
          <h2 className="section-title">Font Families</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="demo-item">
              <p className="font-inter">Inter - Modern sans-serif font</p>
              <p className="font-sans">Sans - System sans-serif font</p>
              <p className="font-serif">Serif - System serif font</p>
              <p className="font-mono">Monospace - System monospace font</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p className="text-center text-sm text-gray-600">
          Typography Framework Demo - Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
