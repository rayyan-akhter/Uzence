import "./App.css";

function App() {
  return (
    <div className="font-inter p-8">
      <h1 className="font-6xl font-black leading-tight case-uppercase decoration-underline-double">
        Typography Framework
      </h1>

      <h2 className="font-4xl font-bold leading-snug mt-8">Font Sizes</h2>
      <div className="space-y-4">
        <p className="font-2xs">2xs (10px) - The smallest text size</p>
        <p className="font-xs">xs (12px) - Extra small text</p>
        <p className="font-sm">sm (14px) - Small text</p>
        <p className="font-base">base (16px) - Default text size</p>
        <p className="font-lg">lg (18px) - Large text</p>
        <p className="font-xl">xl (20px) - Extra large text</p>
        <p className="font-2xl">2xl (24px) - 2x large text</p>
        <p className="font-3xl">3xl (30px) - 3x large text</p>
        <p className="font-4xl">4xl (36px) - 4x large text</p>
      </div>

      <h2 className="font-4xl font-bold leading-snug mt-8">Font Weights</h2>
      <div className="space-y-4">
        <p className="font-thin">Thin (100) - Lightest weight</p>
        <p className="font-extralight">Extra Light (200)</p>
        <p className="font-light">Light (300)</p>
        <p className="font-normal">Normal (400) - Default weight</p>
        <p className="font-medium">Medium (500)</p>
        <p className="font-semibold">Semibold (600)</p>
        <p className="font-bold">Bold (700)</p>
        <p className="font-extrabold">Extra Bold (800)</p>
        <p className="font-black">Black (900) - Heaviest weight</p>
      </div>

      <h2 className="font-4xl font-bold leading-snug mt-8">Line Heights</h2>
      <div className="space-y-4">
        <p className="leading-none">None (1) - Tightest line height</p>
        <p className="leading-tight">Tight (1.25)</p>
        <p className="leading-snug">Snug (1.375)</p>
        <p className="leading-normal">Normal (1.5) - Default line height</p>
        <p className="leading-relaxed">Relaxed (1.625)</p>
        <p className="leading-loose">Loose (2) - Widest line height</p>
      </div>

      <h2 className="font-4xl font-bold leading-snug mt-8">Text Cases</h2>
      <div className="space-y-4">
        <p className="case-uppercase">UPPERCASE TEXT</p>
        <p className="case-lowercase">lowercase text</p>
        <p className="case-capitalize">capitalize text</p>
        <p className="case-normal">Normal Text</p>
      </div>

      <h2 className="font-4xl font-bold leading-snug mt-8">Text Decorations</h2>
      <div className="space-y-4">
        <p className="decoration-none">No decoration</p>
        <p className="decoration-underline">Underline</p>
        <p className="decoration-line-through">Line through</p>
        <p className="decoration-overline">Overline</p>
        <p className="decoration-underline-dotted">Dotted underline</p>
        <p className="decoration-underline-dashed">Dashed underline</p>
        <p className="decoration-underline-double">Double underline</p>
        <p className="decoration-underline-wavy">Wavy underline</p>
      </div>

      <h2 className="font-4xl font-bold leading-snug mt-8">
        Paragraph Spacing
      </h2>
      <div className="space-y-4">
        <p className="paragraph-spacing-none">No spacing</p>
        <p className="paragraph-spacing-xs">Extra small spacing</p>
        <p className="paragraph-spacing-sm">Small spacing</p>
        <p className="paragraph-spacing-md">Medium spacing</p>
        <p className="paragraph-spacing-lg">Large spacing</p>
        <p className="paragraph-spacing-xl">Extra large spacing</p>
        <p className="paragraph-spacing-2xl">2x large spacing</p>
      </div>

      <h2 className="font-4xl font-bold leading-snug mt-8">
        Paragraph Indentation
      </h2>
      <div className="space-y-4">
        <p className="paragraph-indent-none">No indentation</p>
        <p className="paragraph-indent-xs">Extra small indentation</p>
        <p className="paragraph-indent-sm">Small indentation</p>
        <p className="paragraph-indent-md">Medium indentation</p>
        <p className="paragraph-indent-lg">Large indentation</p>
        <p className="paragraph-indent-xl">Extra large indentation</p>
      </div>

      <h2 className="font-4xl font-bold leading-snug mt-8">Font Families</h2>
      <div className="space-y-4">
        <p className="font-inter">Inter font family</p>
        <p className="font-sans">Sans font family</p>
        <p className="font-serif">Serif font family</p>
        <p className="font-mono">Monospace font family</p>
      </div>
    </div>
  );
}

export default App;
