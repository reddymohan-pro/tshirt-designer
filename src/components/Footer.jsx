import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M16 3H8L2 9l2 2 2-2v12h16V9l2 2 2-2-6-6zM12 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-white">
              Thread<span className="text-amber-500">Craft</span>
            </span>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Design your perfect custom t-shirt with our intuitive design tool. 
            Premium quality, fast delivery, endless possibilities.
          </p>
          <div className="flex gap-3 mt-5">
            {['twitter', 'instagram', 'facebook', 'youtube'].map((s) => (
              <a key={s} href="#" className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors">
                <span className="text-xs font-bold text-white uppercase">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">Design</h4>
          <ul className="space-y-2 text-sm">
            {['Start Designing', 'Upload Artwork', 'Browse Templates', 'Group Orders', 'Bulk Discounts'].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-amber-400 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {['About Us', 'Blog', 'Careers', 'Press', 'Partners'].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-amber-400 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            {['Help Center', 'Track Order', 'Returns & Refunds', 'Size Guide', 'Contact Us'].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-amber-400 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
          <div className="mt-5 p-3 bg-neutral-800 rounded-xl text-xs">
            <p className="text-neutral-400">Need help?</p>
            <p className="text-white font-medium mt-0.5">support@threadcraft.in</p>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} ThreadCraft. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Cookie Policy</a>
          </div>
          <div className="flex gap-2">
            {['visa', 'mc', 'upi', 'gpay'].map((p) => (
              <span key={p} className="bg-neutral-800 px-2 py-1 rounded text-xs font-mono text-neutral-400 uppercase">{p}</span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
