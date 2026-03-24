# ThreadCraft – Custom T-Shirt Designer

A production-quality custom t-shirt design web application built with React (Vite), Tailwind CSS, and Fabric.js.

## Features

- **Live T-Shirt Preview** – Real-time canvas rendering using Fabric.js
- **Custom Text** – Type your own text and see it appear on the shirt
- **Drag & Reposition** – Click and drag text anywhere on the t-shirt
- **Text Color Picker** – Preset colors + custom color input
- **T-Shirt Color Selector** – 10 color options
- **Font Family Selection** – 8 font families to choose from
- **Font Size Slider** – Range from 14px to 72px
- **Size Selection** – XS, S, M, L, XL, XXL
- **Quantity Selector** – Adjustable quantity up to 10
- **Dynamic Price Display** – Total updates based on quantity
- **Add to Cart** – Cart counter in navbar updates
- **Download as PNG** – Exports the canvas at 2x resolution
- **Toast Notifications** – Success and warning feedback
- **Responsive Design** – Mobile, tablet, and desktop layouts
- **E-commerce Style UI** – Navbar, footer, breadcrumbs, guarantees

## Technologies

| Technology | Version | Purpose |
|---|---|---|
| React.js | ^18.2 | UI framework |
| Vite | ^5.1 | Build tool & dev server |
| Tailwind CSS | ^3.4 | Utility-first styling |
| Fabric.js | ^5.3 | Canvas manipulation |
| DM Sans | Google Fonts | Body typography |
| Playfair Display | Google Fonts | Display typography |

## Installation & Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Steps

```bash
# Clone the repository
git clone https://github.com/yourusername/tshirt-designer.git
cd tshirt-designer

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
tshirt-designer/
│
├── index.html              # Entry HTML with Google Fonts
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite + React plugin config
├── tailwind.config.js      # Tailwind content paths & theme
├── postcss.config.js       # PostCSS plugins
├── README.md               # This file
│
├── public/                 # Static assets
│
└── src/
    ├── App.jsx             # Root component – state management
    ├── main.jsx            # ReactDOM.createRoot entry
    ├── index.css           # Tailwind directives + global styles
    │
    └── components/
        ├── Navbar.jsx      # Sticky navbar with cart counter
        ├── TshirtPreview.jsx   # Fabric.js canvas with t-shirt SVG
        ├── Controls.jsx    # All design controls & product options
        └── Footer.jsx      # Multi-column footer
```

## How to Use

1. **Type your text** in the "Your Custom Text" field
2. **Pick a t-shirt color** from the color swatches
3. **Change text color** using presets or the custom color picker
4. **Select a font** from the dropdown
5. **Adjust font size** with the slider
6. **Drag the text** in the preview to reposition it
7. **Select size & quantity**
8. Click **Add to Cart** or **Download Design (PNG)**

## Future Improvements

- [ ] Upload custom image/logo onto t-shirt
- [ ] Multiple text layers support
- [ ] Back-of-shirt preview toggle
- [ ] User authentication & saved designs
- [ ] Payment gateway integration (Razorpay)
- [ ] Order tracking system
- [ ] Admin dashboard for order management
- [ ] Share design via link
- [ ] AI-powered design suggestions
- [ ] 3D t-shirt preview with Three.js
