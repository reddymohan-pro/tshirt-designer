import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import TshirtPreview from './components/TshirtPreview'
import Controls from './components/Controls'
import Footer from './components/Footer'

export default function App() {
  // Design state
  const [tshirtColor, setTshirtColor] = useState('#ffffff')
  const [text, setText] = useState('YOUR TEXT')
  const [textColor, setTextColor] = useState('#1a1a1a')
  const [fontSize, setFontSize] = useState(28)
  const [fontFamily, setFontFamily] = useState('Arial')

  // Purchase state
  const [size, setSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [cartCount, setCartCount] = useState(0)
  const [cartPulse, setCartPulse] = useState(false)

  // Ref to expose canvas export function from TshirtPreview
  const canvasExportRef = useRef(null)

  const PRICE = 29.99

  const handleAddToCart = () => {
    setCartCount(prev => prev + quantity)
    setCartPulse(true)
    setTimeout(() => setCartPulse(false), 400)
  }

  const handleDownload = () => {
    if (canvasExportRef.current) canvasExportRef.current()
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--cream)' }}>
      <Navbar cartCount={cartCount} cartPulse={cartPulse} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" style={{ color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif' }}>
          <span>Home</span>
          <span className="mx-2">›</span>
          <span>Apparel</span>
          <span className="mx-2">›</span>
          <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Custom T-Shirt</span>
        </nav>

        {/* Page title */}
        <div className="mb-8">
          <h1
            className="text-4xl sm:text-5xl font-black mb-2"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--ink)', lineHeight: 1.1 }}
          >
            Design Your Tee
          </h1>
          <p style={{ color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif' }}>
            Premium 100% combed cotton · Unisex fit · Unlimited creativity
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2 fade-in">
            <TshirtPreview
              tshirtColor={tshirtColor}
              text={text}
              textColor={textColor}
              fontSize={fontSize}
              fontFamily={fontFamily}
              exportRef={canvasExportRef}
            />
          </div>

          <div className="w-full lg:w-1/2 fade-in" style={{ animationDelay: '0.1s' }}>
            <Controls
              text={text}
              setText={setText}
              textColor={textColor}
              setTextColor={setTextColor}
              tshirtColor={tshirtColor}
              setTshirtColor={setTshirtColor}
              fontSize={fontSize}
              setFontSize={setFontSize}
              fontFamily={fontFamily}
              setFontFamily={setFontFamily}
              size={size}
              setSize={setSize}
              quantity={quantity}
              setQuantity={setQuantity}
              price={PRICE}
              onAddToCart={handleAddToCart}
              onDownload={handleDownload}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
