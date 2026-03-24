import React from 'react'

// Navbar with brand logo and cart counter
const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M16 3H8L2 9l2 2 2-2v12h16V9l2 2 2-2-6-6zM12 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-neutral-900">
            Thread<span className="text-amber-500">Craft</span>
          </span>
        </div>

        {/* Nav links – hidden on mobile */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#" className="hover:text-neutral-900 transition-colors">Design</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">Gallery</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">Pricing</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">About</a>
        </div>

        {/* Right – Cart */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-xl hover:bg-neutral-100 transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button className="hidden sm:block btn-primary text-sm px-4 py-2">
            Sign In
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
