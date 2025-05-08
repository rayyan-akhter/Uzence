import React from "react";
import "typography-utils/dist/index.css";
import "./App.css";

function App() {
  return (
    <div className="container container-lg">
      <header className="app-header">
        <h1 className="font-4xl font-bold text-center mb-8">
          Typography Framework
        </h1>
        <p className="font-lg text-center mb-12">
          A comprehensive typography system for modern web applications
        </p>
      </header>

      <main className="demo-container">
        {/* Font Sizes Section */}
        <section className="demo-section">
          <h2 className="section-title font-2xl font-bold">Font Sizes</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="font-2xs bg-gray-100 p-4">2XS (10px)</div>
            <div className="font-xs bg-gray-100 p-4">XS (12px)</div>
            <div className="font-sm bg-gray-100 p-4">SM (14px)</div>
            <div className="font-base bg-gray-100 p-4">Base (16px)</div>
            <div className="font-lg bg-gray-100 p-4">LG (18px)</div>
            <div className="font-xl bg-gray-100 p-4">XL (20px)</div>
            <div className="font-2xl bg-gray-100 p-4">2XL (24px)</div>
            <div className="font-3xl bg-gray-100 p-4">3XL (30px)</div>
            <div className="font-4xl bg-gray-100 p-4">4XL (36px)</div>
            <div className="font-5xl bg-gray-100 p-4">5XL (48px)</div>
            <div className="font-6xl bg-gray-100 p-4">6XL (60px)</div>
            <div className="font-7xl bg-gray-100 p-4">7XL (72px)</div>
            <div className="font-8xl bg-gray-100 p-4">8XL (96px)</div>
            <div className="font-9xl bg-gray-100 p-4">9XL (128px)</div>
          </div>
        </section>

        {/* Font Weights Section */}
        <section className="demo-section">
          <h2 className="section-title font-2xl font-bold">Font Weights</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="font-thin bg-gray-100 p-4">Thin (100)</div>
            <div className="font-extralight bg-gray-100 p-4">
              Extra Light (200)
            </div>
            <div className="font-light bg-gray-100 p-4">Light (300)</div>
            <div className="font-normal bg-gray-100 p-4">Normal (400)</div>
            <div className="font-medium bg-gray-100 p-4">Medium (500)</div>
            <div className="font-semibold bg-gray-100 p-4">Semibold (600)</div>
            <div className="font-bold bg-gray-100 p-4">Bold (700)</div>
            <div className="font-extrabold bg-gray-100 p-4">
              Extra Bold (800)
            </div>
            <div className="font-black bg-gray-100 p-4">Black (900)</div>
          </div>
        </section>

        {/* Line Heights Section */}
        <section className="demo-section">
          <h2 className="section-title font-2xl font-bold">Line Heights</h2>
          <div className="grid grid-cols-2 gap-4">
            <h3 className="col-span-2 font-xl font-bold mb-4">
              Relative Line Heights
            </h3>
            <div className="leading-none bg-gray-100 p-4">
              None (1)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>
            <div className="leading-tight bg-gray-100 p-4">
              Tight (1.1)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>
            <div className="leading-snug bg-gray-100 p-4">
              Snug (1.2)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>
            <div className="leading-normal bg-gray-100 p-4">
              Normal (1.5)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>
            <div className="leading-relaxed bg-gray-100 p-4">
              Relaxed (1.75)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>
            <div className="leading-loose bg-gray-100 p-4">
              Loose (2)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>

            <h3 className="col-span-2 font-xl font-bold mb-4 mt-8">
              Fixed Line Heights
            </h3>
            <div className="leading-xs bg-gray-100 p-4">
              Extra Small (12px)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>
            <div className="leading-sm bg-gray-100 p-4">
              Small (16px)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>
            <div className="leading-md bg-gray-100 p-4">
              Medium (20px)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>
            <div className="leading-lg bg-gray-100 p-4">
              Large (24px)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>
            <div className="leading-xl bg-gray-100 p-4">
              Extra Large (32px)
              <br />
              Second line to demonstrate
              <br />
              Third line to show spacing
            </div>
          </div>
        </section>

        {/* Text Cases Section */}
        <section className="demo-section">
          <h2 className="section-title font-2xl font-bold">Text Cases</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="case-uppercase bg-gray-100 p-4">Uppercase Text</div>
            <div className="case-lowercase bg-gray-100 p-4">Lowercase Text</div>
            <div className="case-capitalize bg-gray-100 p-4">
              capitalize text
            </div>
            <div className="case-normal bg-gray-100 p-4">Normal Text</div>
          </div>
        </section>

        {/* Text Decorations Section */}
        <section className="demo-section">
          <h2 className="section-title font-2xl font-bold">Text Decorations</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="decoration-none bg-gray-100 p-4">No Decoration</div>
            <div className="decoration-underline bg-gray-100 p-4">
              Underline
            </div>
            <div className="decoration-line-through bg-gray-100 p-4">
              Line Through
            </div>
            <div className="decoration-overline bg-gray-100 p-4">Overline</div>
            <div className="decoration-underline-dotted bg-gray-100 p-4">
              Underline Dotted
            </div>
            <div className="decoration-underline-dashed bg-gray-100 p-4">
              Underline Dashed
            </div>
            <div className="decoration-underline-double bg-gray-100 p-4">
              Underline Double
            </div>
            <div className="decoration-underline-wavy bg-gray-100 p-4">
              Underline Wavy
            </div>
          </div>
        </section>

        {/* Paragraph Spacing Section */}
        <section className="demo-section">
          <h2 className="section-title font-2xl font-bold">
            Paragraph Spacing
          </h2>
          <div className="space-y-4">
            <div className="paragraph-spacing-none bg-gray-100 p-4">
              No Spacing (0)
              <p>Second paragraph</p>
              <p>Third paragraph</p>
            </div>
            <div className="paragraph-spacing-2xs bg-gray-100 p-4">
              Extra Extra Small Spacing (4px)
              <p>Second paragraph</p>
              <p>Third paragraph</p>
            </div>
            <div className="paragraph-spacing-xs bg-gray-100 p-4">
              Extra Small Spacing (8px)
              <p>Second paragraph</p>
              <p>Third paragraph</p>
            </div>
            <div className="paragraph-spacing-sm bg-gray-100 p-4">
              Small Spacing (12px)
              <p>Second paragraph</p>
              <p>Third paragraph</p>
            </div>
            <div className="paragraph-spacing-base bg-gray-100 p-4">
              Base Spacing (16px)
              <p>Second paragraph</p>
              <p>Third paragraph</p>
            </div>
            <div className="paragraph-spacing-md bg-gray-100 p-4">
              Medium Spacing (24px)
              <p>Second paragraph</p>
              <p>Third paragraph</p>
            </div>
            <div className="paragraph-spacing-lg bg-gray-100 p-4">
              Large Spacing (32px)
              <p>Second paragraph</p>
              <p>Third paragraph</p>
            </div>
            <div className="paragraph-spacing-xl bg-gray-100 p-4">
              Extra Large Spacing (48px)
              <p>Second paragraph</p>
              <p>Third paragraph</p>
            </div>
            <div className="paragraph-spacing-2xl bg-gray-100 p-4">
              Extra Extra Large Spacing (64px)
              <p>Second paragraph</p>
              <p>Third paragraph</p>
            </div>
            <div className="paragraph-spacing-3xl bg-gray-100 p-4">
              Maximum Spacing (96px)
              <p>Second paragraph</p>
              <p>Third paragraph</p>
            </div>
          </div>
        </section>

        {/* Paragraph Indentation Section */}
        <section className="demo-section">
          <h2 className="section-title font-2xl font-bold">
            Paragraph Indentation
          </h2>
          <div className="space-y-4">
            <div className="paragraph-indent-none bg-gray-100 p-4">
              No Indentation
              <p>
                This is a paragraph with no indentation. The text starts at the
                left margin.
              </p>
            </div>
            <div className="paragraph-indent-xs bg-gray-100 p-4">
              Extra Small Indentation (8px)
              <p>
                This is a paragraph with extra small indentation. The text is
                indented by 8px.
              </p>
            </div>
            <div className="paragraph-indent-sm bg-gray-100 p-4">
              Small Indentation (16px)
              <p>
                This is a paragraph with small indentation. The text is indented
                by 16px.
              </p>
            </div>
            <div className="paragraph-indent-md bg-gray-100 p-4">
              Medium Indentation (32px)
              <p>
                This is a paragraph with medium indentation. The text is
                indented by 32px.
              </p>
            </div>
            <div className="paragraph-indent-lg bg-gray-100 p-4">
              Large Indentation (48px)
              <p>
                This is a paragraph with large indentation. The text is indented
                by 48px.
              </p>
            </div>
          </div>
        </section>

        {/* Font Families Section */}
        <section className="demo-section">
          <h2 className="section-title font-2xl font-bold">Font Families</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="font-inter bg-gray-100 p-4">
              Inter Font
              <p className="font-sm">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="font-sans bg-gray-100 p-4">
              System Sans
              <p className="font-sm">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="font-serif bg-gray-100 p-4">
              Serif (Georgia)
              <p className="font-sm">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="font-mono bg-gray-100 p-4">
              Monospace (JetBrains Mono)
              <p className="font-sm">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p className="font-sm text-gray-600">
          Typography Framework Demo - Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
