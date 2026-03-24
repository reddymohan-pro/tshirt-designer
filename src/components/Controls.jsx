// Controls — all customization options for the t-shirt designer

const TSHIRT_COLORS = [
  { label: 'White',    value: '#ffffff' },
  { label: 'Black',    value: '#1a1a1a' },
  { label: 'Slate',    value: '#64748b' },
  { label: 'Navy',     value: '#1e3a5f' },
  { label: 'Forest',   value: '#2d6a4f' },
  { label: 'Burgundy', value: '#6b2737' },
  { label: 'Sand',     value: '#d4b896' },
  { label: 'Sky',      value: '#7ec8e3' },
  { label: 'Coral',    value: '#f4845f' },
  { label: 'Lavender', value: '#b8a9d4' },
]

const TEXT_COLORS = [
  '#1a1a1a', '#ffffff', '#c8a96e', '#e53e3e',
  '#3182ce', '#38a169', '#d69e2e', '#805ad5',
]

const FONT_OPTIONS = [
  'Arial', 'Georgia', 'Courier New', 'Times New Roman',
  'Verdana', 'Trebuchet MS', 'Impact', 'Comic Sans MS',
]

const SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL']

export default function Controls({
  text, setText,
  textColor, setTextColor,
  tshirtColor, setTshirtColor,
  fontSize, setFontSize,
  fontFamily, setFontFamily,
  size, setSize,
  quantity, setQuantity,
  price,
  onAddToCart,
  onDownload,
}) {
  return (
    <div className="flex flex-col gap-5">

      {/* Price + rating */}
      <div className="rounded-2xl p-5" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-3xl font-black" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--ink)' }}>
              ${price.toFixed(2)}
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>Free shipping on orders over $50</p>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i <= 4 ? '#c8a96e' : '#e8e2d9'}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-xs" style={{ color: 'var(--muted)' }}>4.8 (312 reviews)</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs font-medium" style={{ color: '#38a169', fontFamily: 'JetBrains Mono, monospace' }}>IN STOCK</span>
        </div>
      </div>

      {/* Customization card */}
      <div className="rounded-2xl p-5 flex flex-col gap-5" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
        <SectionLabel>Customize Your Design</SectionLabel>

        {/* Text input */}
        <div>
          <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            Custom Text
          </label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type your message..."
            maxLength={40}
            className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
            style={{ border: '1.5px solid var(--border)', fontFamily: 'DM Sans, sans-serif', color: 'var(--ink)', backgroundColor: 'var(--surface-raised)' }}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--border)')}
          />
          <p className="text-right text-xs mt-1" style={{ color: 'var(--muted)' }}>{text.length}/40</p>
        </div>

        {/* Font family */}
        <div>
          <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            Font Family
          </label>
          <select
            value={fontFamily}
            onChange={e => setFontFamily(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
            style={{ border: '1.5px solid var(--border)', fontFamily: fontFamily + ', sans-serif', color: 'var(--ink)', backgroundColor: 'var(--surface-raised)', cursor: 'pointer' }}
          >
            {FONT_OPTIONS.map(f => (
              <option key={f} value={f} style={{ fontFamily: f }}>{f}</option>
            ))}
          </select>
        </div>

        {/* Font size slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>
              Font Size
            </label>
            <span className="text-sm font-bold px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--surface-raised)', color: 'var(--ink)', fontFamily: 'JetBrains Mono, monospace' }}>
              {fontSize}px
            </span>
          </div>
          <input type="range" min={12} max={72} value={fontSize} onChange={e => setFontSize(Number(e.target.value))} />
          <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--muted)' }}>
            <span>Small</span><span>Large</span>
          </div>
        </div>

        {/* Text color */}
        <div>
          <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            Text Color
          </label>
          <div className="flex gap-2 flex-wrap items-center">
            {TEXT_COLORS.map(c => (
              <button
                key={c}
                onClick={() => setTextColor(c)}
                title={c}
                className="w-8 h-8 rounded-full border-2 transition-all duration-150 flex-shrink-0"
                style={{
                  backgroundColor: c,
                  borderColor: textColor === c ? 'var(--ink)' : 'var(--border)',
                  boxShadow: textColor === c ? '0 0 0 2px var(--cream), 0 0 0 4px var(--ink)' : 'none',
                  transform: textColor === c ? 'scale(1.15)' : 'scale(1)',
                }}
              />
            ))}
            {/* Custom color picker */}
            <label className="w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer relative overflow-hidden" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface-raised)' }} title="Custom color">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
                <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/>
                <circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
              </svg>
              <input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }} />
            </label>
          </div>
        </div>

        {/* Shirt color */}
        <div>
          <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            Shirt Color
          </label>
          <div className="grid grid-cols-5 gap-2">
            {TSHIRT_COLORS.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setTshirtColor(value)}
                title={label}
                className="flex flex-col items-center gap-1"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <div
                  className="w-9 h-9 rounded-xl border-2 transition-all duration-150"
                  style={{
                    backgroundColor: value,
                    borderColor: tshirtColor === value ? 'var(--accent)' : 'var(--border)',
                    boxShadow: tshirtColor === value ? '0 0 0 2px var(--cream), 0 0 0 4px var(--accent)' : '0 1px 3px rgba(0,0,0,0.1)',
                    transform: tshirtColor === value ? 'scale(1.12)' : 'scale(1)',
                  }}
                />
                <span style={{ color: 'var(--muted)', fontSize: '10px' }}>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Size & Quantity */}
      <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
        <SectionLabel>Size & Quantity</SectionLabel>

        {/* Size */}
        <div>
          <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            Select Size
          </label>
          <div className="flex gap-2 flex-wrap">
            {SIZES.map(s => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150"
                style={{
                  backgroundColor: size === s ? 'var(--ink)' : 'var(--surface-raised)',
                  color: size === s ? 'var(--cream)' : 'var(--ink)',
                  border: `1.5px solid ${size === s ? 'var(--ink)' : 'var(--border)'}`,
                  fontFamily: 'JetBrains Mono, monospace',
                  cursor: 'pointer', fontSize: '13px',
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <a href="#" className="text-xs mt-1 block" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Size guide →</a>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-xs font-semibold mb-2 uppercase tracking-widest" style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            Quantity
          </label>
          <div className="flex items-center rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border)', width: 'fit-content' }}>
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="w-10 h-10 flex items-center justify-center text-lg font-bold"
              style={{ backgroundColor: 'var(--surface-raised)', color: 'var(--ink)', border: 'none', cursor: 'pointer' }}
            >−</button>
            <span className="w-12 text-center font-bold text-sm" style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--ink)' }}>
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(q => Math.min(99, q + 1))}
              className="w-10 h-10 flex items-center justify-center text-lg font-bold"
              style={{ backgroundColor: 'var(--surface-raised)', color: 'var(--ink)', border: 'none', cursor: 'pointer' }}
            >+</button>
          </div>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between py-3 px-4 rounded-xl" style={{ backgroundColor: 'var(--surface-raised)', border: '1px solid var(--border)' }}>
          <span className="text-sm" style={{ color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif' }}>
            Total ({quantity} × ${price.toFixed(2)})
          </span>
          <span className="text-lg font-black" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--ink)' }}>
            ${(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={onAddToCart}
          className="w-full py-4 rounded-2xl text-base font-semibold tracking-wide flex items-center justify-center gap-3"
          style={{ backgroundColor: 'var(--ink)', color: 'var(--cream)', fontFamily: 'DM Sans, sans-serif', border: '2px solid var(--ink)', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor='#2a2825'; e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 6px 24px rgba(0,0,0,0.18)' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor='var(--ink)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/>
          </svg>
          Add to Cart
        </button>

        <button
          onClick={onDownload}
          className="w-full py-3.5 rounded-2xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
          style={{ backgroundColor: 'transparent', color: 'var(--ink)', fontFamily: 'DM Sans, sans-serif', border: '1.5px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent-dark)'; e.currentTarget.style.backgroundColor='#faf6ee' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--ink)'; e.currentTarget.style.backgroundColor='transparent' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Design (PNG)
        </button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: '🔒', label: 'Secure Checkout' },
          { icon: '↩️', label: '30-Day Returns' },
          { icon: '🚚', label: 'Fast Delivery' },
        ].map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1 py-3 rounded-xl text-center" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <span className="text-lg">{icon}</span>
            <span className="text-xs font-medium leading-tight" style={{ color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-base font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--ink)' }}>
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
    </div>
  )
}
