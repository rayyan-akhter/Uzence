import { useState } from 'react'
import './App.css'

function App() {
  const [previewText, setPreviewText] = useState('Preview Text')
  const [selectedClass, setSelectedClass] = useState('')

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setSelectedClass(text)
    setTimeout(() => setSelectedClass(''), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">IUI Typography Utilities Demo</h1>

        {/* Live Preview Section */}
        <section className="section">
          <h2 className="section-title">Live Preview</h2>
          <input
            type="text"
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value)}
            className="input"
            placeholder="Enter text to preview"
          />
          <div className="preview-container">
            <p className={selectedClass}>{previewText}</p>
          </div>
        </section>

        {/* Font Family Section */}
        <section className="section">
          <h2 className="section-title">Font Family</h2>
          <div className="space-y-2">
            {[
              { class: 'font-sans', label: 'System Sans-serif' },
              { class: 'font-serif', label: 'System Serif' },
              { class: 'font-mono', label: 'System Monospace' },
              { class: 'font-inter', label: 'Inter' },
              { class: 'font-poppins', label: 'Poppins' },
              { class: 'font-roboto', label: 'Roboto' },
              { class: 'font-open-sans', label: 'Open Sans' }
            ].map(({ class: className, label }) => (
              <div key={className} className="utility-item">
                <p className={className}>{label}</p>
                <button
                  onClick={() => copyToClipboard(className)}
                  className={`btn ${selectedClass === className ? 'btn-success' : 'btn-primary'}`}
                >
                  {selectedClass === className ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Font Weight Section */}
        <section className="section">
          <h2 className="section-title">Font Weight</h2>
          <div className="space-y-2">
            {[
              { class: 'font-thin', label: 'Thin (100)' },
              { class: 'font-extralight', label: 'Extra Light (200)' },
              { class: 'font-light', label: 'Light (300)' },
              { class: 'font-normal', label: 'Normal (400)' },
              { class: 'font-medium', label: 'Medium (500)' },
              { class: 'font-semibold', label: 'Semibold (600)' },
              { class: 'font-bold', label: 'Bold (700)' },
              { class: 'font-extrabold', label: 'Extra Bold (800)' },
              { class: 'font-black', label: 'Black (900)' }
            ].map(({ class: className, label }) => (
              <div key={className} className="utility-item">
                <p className={className}>{label}</p>
                <button
                  onClick={() => copyToClipboard(className)}
                  className={`btn ${selectedClass === className ? 'btn-success' : 'btn-primary'}`}
                >
                  {selectedClass === className ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Font Size Section */}
        <section className="section">
          <h2 className="section-title">Font Size</h2>
          <div className="space-y-2">
            {[
              { class: 'text-2xs', label: '2XS (0.625rem)' },
              { class: 'text-xs', label: 'XS (0.75rem)' },
              { class: 'text-sm', label: 'SM (0.875rem)' },
              { class: 'text-base', label: 'Base (1rem)' },
              { class: 'text-lg', label: 'LG (1.125rem)' },
              { class: 'text-xl', label: 'XL (1.25rem)' },
              { class: 'text-2xl', label: '2XL (1.5rem)' },
              { class: 'text-3xl', label: '3XL (1.875rem)' },
              { class: 'text-4xl', label: '4XL (2.25rem)' },
              { class: 'text-5xl', label: '5XL (3rem)' },
              { class: 'text-6xl', label: '6XL (3.75rem)' },
              { class: 'text-7xl', label: '7XL (4.5rem)' },
              { class: 'text-8xl', label: '8XL (6rem)' },
              { class: 'text-9xl', label: '9XL (8rem)' }
            ].map(({ class: className, label }) => (
              <div key={className} className="utility-item">
                <p className={className}>{label}</p>
                <button
                  onClick={() => copyToClipboard(className)}
                  className={`btn ${selectedClass === className ? 'btn-success' : 'btn-primary'}`}
                >
                  {selectedClass === className ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Letter Spacing Section */}
        <section className="section">
          <h2 className="section-title">Letter Spacing</h2>
          <div className="space-y-2">
            {[
              { class: 'tracking-tighter', label: 'Tighter Spacing' },
              { class: 'tracking-tight', label: 'Tight Spacing' },
              { class: 'tracking-normal', label: 'Normal Spacing' },
              { class: 'tracking-wide', label: 'Wide Spacing' },
              { class: 'tracking-wider', label: 'Wider Spacing' },
              { class: 'tracking-widest', label: 'Widest Spacing' },
              { class: 'tracking-1', label: 'Tracking 1' },
              { class: 'tracking-2', label: 'Tracking 2' },
              { class: 'tracking-3', label: 'Tracking 3' },
              { class: 'tracking-4', label: 'Tracking 4' },
              { class: 'tracking-5', label: 'Tracking 5' }
            ].map(({ class: className, label }) => (
              <div key={className} className="utility-item">
                <p className={className}>{label}</p>
                <button
                  onClick={() => copyToClipboard(className)}
                  className={`btn ${selectedClass === className ? 'btn-success' : 'btn-primary'}`}
                >
                  {selectedClass === className ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Line Height Section */}
        <section className="section">
          <h2 className="section-title">Line Height</h2>
          <div className="space-y-2">
            {[
              { class: 'leading-none', label: 'No line height (1)' },
              { class: 'leading-tight', label: 'Tight line height (1.25)' },
              { class: 'leading-snug', label: 'Snug line height (1.375)' },
              { class: 'leading-normal', label: 'Normal line height (1.5)' },
              { class: 'leading-relaxed', label: 'Relaxed line height (1.625)' },
              { class: 'leading-loose', label: 'Loose line height (2)' },
              { class: 'leading-3', label: 'Leading 3 (0.75rem)' },
              { class: 'leading-4', label: 'Leading 4 (1rem)' },
              { class: 'leading-5', label: 'Leading 5 (1.25rem)' },
              { class: 'leading-6', label: 'Leading 6 (1.5rem)' },
              { class: 'leading-7', label: 'Leading 7 (1.75rem)' },
              { class: 'leading-8', label: 'Leading 8 (2rem)' },
              { class: 'leading-9', label: 'Leading 9 (2.25rem)' },
              { class: 'leading-10', label: 'Leading 10 (2.5rem)' }
            ].map(({ class: className, label }) => (
              <div key={className} className="utility-item">
                <p className={className}>{label}</p>
                <button
                  onClick={() => copyToClipboard(className)}
                  className={`btn ${selectedClass === className ? 'btn-success' : 'btn-primary'}`}
                >
                  {selectedClass === className ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Word Spacing Section */}
        <section className="section">
          <h2 className="section-title">Word Spacing</h2>
          <div className="space-y-2">
            {[
              { class: 'word-spacing-tight', label: 'Tight word spacing' },
              { class: 'word-spacing-normal', label: 'Normal word spacing' },
              { class: 'word-spacing-wide', label: 'Wide word spacing' },
              { class: 'word-spacing-wider', label: 'Wider word spacing' },
              { class: 'word-spacing-widest', label: 'Widest word spacing' }
            ].map(({ class: className, label }) => (
              <div key={className} className="utility-item">
                <p className={className}>{label}</p>
                <button
                  onClick={() => copyToClipboard(className)}
                  className={`btn ${selectedClass === className ? 'btn-success' : 'btn-primary'}`}
                >
                  {selectedClass === className ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Paragraph Indent Section */}
        <section className="section">
          <h2 className="section-title">Paragraph Indent</h2>
          <div className="space-y-2">
            {[
              { class: 'indent-none', label: 'No indentation' },
              { class: 'indent-xs', label: 'Extra small indentation (0.5rem)' },
              { class: 'indent-sm', label: 'Small indentation (1rem)' },
              { class: 'indent-md', label: 'Medium indentation (2rem)' },
              { class: 'indent-lg', label: 'Large indentation (3rem)' },
              { class: 'indent-xl', label: 'Extra large indentation (4rem)' },
              { class: 'indent-2xl', label: '2XL indentation (6rem)' }
            ].map(({ class: className, label }) => (
              <div key={className} className="utility-item">
                <p className={className}>{label}</p>
                <button
                  onClick={() => copyToClipboard(className)}
                  className={`btn ${selectedClass === className ? 'btn-success' : 'btn-primary'}`}
                >
                  {selectedClass === className ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Paragraph Spacing Section */}
        <section className="section">
          <h2 className="section-title">Paragraph Spacing</h2>
          <div className="space-y-2">
            {[
              { class: 'space-y-none', label: 'No spacing' },
              { class: 'space-y-xs', label: 'Extra small spacing (0.5rem)' },
              { class: 'space-y-sm', label: 'Small spacing (1rem)' },
              { class: 'space-y-md', label: 'Medium spacing (2rem)' },
              { class: 'space-y-lg', label: 'Large spacing (3rem)' },
              { class: 'space-y-xl', label: 'Extra large spacing (4rem)' },
              { class: 'space-y-2xl', label: '2XL spacing (6rem)' }
            ].map(({ class: className, label }) => (
              <div key={className} className="utility-item">
                <div className={className}>
                  <p>First paragraph</p>
                  <p>Second paragraph</p>
                </div>
                <button
                  onClick={() => copyToClipboard(className)}
                  className={`btn ${selectedClass === className ? 'btn-success' : 'btn-primary'}`}
                >
                  {selectedClass === className ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Text Decoration Section */}
        <section className="section">
          <h2 className="section-title">Text Decoration</h2>
          <div className="space-y-2">
            {[
              { class: 'underline', label: 'Underline' },
              { class: 'underline-dashed', label: 'Dashed Underline' },
              { class: 'underline-dotted', label: 'Dotted Underline' },
              { class: 'underline-wavy', label: 'Wavy Underline' },
              { class: 'line-through', label: 'Line Through' },
              { class: 'no-underline', label: 'No Decoration' }
            ].map(({ class: className, label }) => (
              <div key={className} className="utility-item">
                <p className={className}>{label}</p>
                <button
                  onClick={() => copyToClipboard(className)}
                  className={`btn ${selectedClass === className ? 'btn-success' : 'btn-primary'}`}
                >
                  {selectedClass === className ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Text Case Section */}
        <section className="section">
          <h2 className="section-title">Text Case</h2>
          <div className="space-y-2">
            {[
              { class: 'uppercase', label: 'UPPERCASE TEXT' },
              { class: 'lowercase', label: 'lowercase text' },
              { class: 'capitalize', label: 'capitalize each word' },
              { class: 'small-caps', label: 'Small Caps Text' },
              { class: 'first-letter-uppercase', label: 'first letter uppercase' },
              { class: 'all-words-uppercase', label: 'all words uppercase' }
            ].map(({ class: className, label }) => (
              <div key={className} className="utility-item">
                <p className={className}>{label}</p>
                <button
                  onClick={() => copyToClipboard(className)}
                  className={`btn ${selectedClass === className ? 'btn-success' : 'btn-primary'}`}
                >
                  {selectedClass === className ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App

