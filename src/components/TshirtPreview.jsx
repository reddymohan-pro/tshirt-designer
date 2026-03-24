import { useEffect, useRef, useCallback } from 'react'
import { fabric } from 'fabric'

// Generates the t-shirt SVG markup string for a given fill color
function buildTshirtSVG(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 420" width="400" height="420">
  <defs>
    <filter id="tsh-shadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="5" stdDeviation="9" flood-color="rgba(0,0,0,0.13)"/>
    </filter>
  </defs>
  <path d="M 130 42 C 145 36, 165 30, 200 30 C 235 30, 255 36, 270 42 L 312 62 L 372 102 L 340 142 L 300 118 L 300 382 L 100 382 L 100 118 L 60 142 L 28 102 L 88 62 Z"
    fill="${color}" filter="url(#tsh-shadow)" stroke="rgba(0,0,0,0.08)" stroke-width="1.5"/>
  <path d="M 130 42 C 150 58, 172 66, 200 66 C 228 66, 250 58, 270 42"
    fill="none" stroke="rgba(0,0,0,0.10)" stroke-width="2"/>
  <line x1="200" y1="72" x2="200" y2="374" stroke="rgba(0,0,0,0.035)" stroke-width="3"/>
  <line x1="162" y1="122" x2="156" y2="372" stroke="rgba(0,0,0,0.025)" stroke-width="2"/>
  <line x1="238" y1="122" x2="244" y2="372" stroke="rgba(0,0,0,0.025)" stroke-width="2"/>
</svg>`
}

export default function TshirtPreview({
  tshirtColor,
  text,
  textColor,
  fontSize,
  fontFamily,
  exportRef,
}) {
  const canvasElRef = useRef(null)
  const fabricRef = useRef(null)
  const textboxRef = useRef(null)
  const tshirtObjRef = useRef(null)

  // Initialize Fabric canvas once on mount
  useEffect(() => {
    if (!canvasElRef.current || fabricRef.current) return

    const canvas = new fabric.Canvas(canvasElRef.current, {
      width: 400,
      height: 420,
      backgroundColor: 'transparent',
      selection: true,
      preserveObjectStacking: true,
    })
    fabricRef.current = canvas

    // Load SVG t-shirt as non-interactive background
    const svgStr = buildTshirtSVG(tshirtColor)
    const blob = new Blob([svgStr], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)

    fabric.loadSVGFromURL(url, (objects, options) => {
      const group = fabric.util.groupSVGElements(objects, options)
      group.set({ left: 0, top: 0, selectable: false, evented: false, hoverCursor: 'default' })
      tshirtObjRef.current = group
      canvas.add(group)
      canvas.sendToBack(group)
      canvas.renderAll()
      URL.revokeObjectURL(url)
    })

    // Create draggable Textbox
    const textbox = new fabric.Textbox(text || 'YOUR TEXT', {
      left: 200, top: 210,
      originX: 'center', originY: 'center',
      width: 220,
      fontSize: fontSize || 28,
      fontFamily: fontFamily || 'Arial',
      fill: textColor || '#1a1a1a',
      textAlign: 'center',
      editable: true, selectable: true,
      hasControls: true, hasBorders: true,
      borderColor: '#c8a96e',
      cornerColor: '#c8a96e',
      cornerStrokeColor: '#a0823e',
      cornerSize: 10,
      transparentCorners: false,
    })

    canvas.add(textbox)
    canvas.setActiveObject(textbox)
    canvas.renderAll()
    textboxRef.current = textbox

    return () => {
      canvas.dispose()
      fabricRef.current = null
    }
  }, []) // run once

  // Sync tshirt color
  useEffect(() => {
    const canvas = fabricRef.current
    if (!canvas) return
    const svgStr = buildTshirtSVG(tshirtColor)
    const blob = new Blob([svgStr], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    fabric.loadSVGFromURL(url, (objects, options) => {
      if (tshirtObjRef.current) canvas.remove(tshirtObjRef.current)
      const group = fabric.util.groupSVGElements(objects, options)
      group.set({ left: 0, top: 0, selectable: false, evented: false, hoverCursor: 'default' })
      tshirtObjRef.current = group
      canvas.add(group)
      canvas.sendToBack(group)
      canvas.renderAll()
      URL.revokeObjectURL(url)
    })
  }, [tshirtColor])

  // Sync text content
  useEffect(() => {
    if (!textboxRef.current || !fabricRef.current) return
    textboxRef.current.set('text', text || '')
    fabricRef.current.renderAll()
  }, [text])

  // Sync text color
  useEffect(() => {
    if (!textboxRef.current || !fabricRef.current) return
    textboxRef.current.set('fill', textColor)
    fabricRef.current.renderAll()
  }, [textColor])

  // Sync font size
  useEffect(() => {
    if (!textboxRef.current || !fabricRef.current) return
    textboxRef.current.set('fontSize', fontSize)
    fabricRef.current.renderAll()
  }, [fontSize])

  // Sync font family
  useEffect(() => {
    if (!textboxRef.current || !fabricRef.current) return
    textboxRef.current.set('fontFamily', fontFamily)
    fabricRef.current.renderAll()
  }, [fontFamily])

  // Export as PNG download
  const handleExport = useCallback(() => {
    const canvas = fabricRef.current
    if (!canvas) return
    canvas.discardActiveObject()
    canvas.renderAll()
    const dataURL = canvas.toDataURL({ format: 'png', multiplier: 2 })
    const link = document.createElement('a')
    link.download = 'threadcraft-design.png'
    link.href = dataURL
    link.click()
  }, [])

  // Expose export function to parent via ref
  useEffect(() => {
    if (exportRef) exportRef.current = handleExport
  }, [exportRef, handleExport])

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
          padding: '1.5rem',
        }}
      >
        {/* Live badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}
          >
            Live Preview
          </span>
        </div>

        {/* Canvas container */}
        <div
          className="mx-auto overflow-hidden rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #f5f1eb 0%, #ede8e0 100%)',
            width: '100%',
            maxWidth: '420px',
            aspectRatio: '400 / 420',
          }}
        >
          <canvas ref={canvasElRef} style={{ display: 'block' }} />
        </div>

        {/* Hint */}
        <p
          className="text-center text-xs mt-4"
          style={{ color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif' }}
        >
          ✦ Drag text anywhere on the shirt · Double-click to edit inline
        </p>
      </div>
    </div>
  )
}
