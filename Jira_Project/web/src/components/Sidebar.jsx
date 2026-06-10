import React from 'react'
import { Columns, FileTree, Layers } from 'lucide-react'

const items = [
  'Dashboard',
  'Test Explorer',
  'Test Data',
  'Reports'
]

export default function Sidebar({ active, onChange }) {
  return (
    <aside className="w-64 bg-transparent min-h-screen p-4 hidden lg:block">
      <div className="mb-6 px-2">
        <div className="text-lg font-semibold text-gray-300">Playwright Inspector</div>
      </div>
      <nav>
        {items.map(i => (
          <div
            key={i}
            onClick={() => onChange(i)}
            className={`flex items-center gap-3 px-3 py-2 rounded-md mb-1 cursor-pointer ${active===i ? 'bg-white/5 text-white' : 'text-gray-400'}`}
          >
            <span className="w-5 h-5 text-gray-400">
              {i === 'Dashboard' ? <FileTree /> : i === 'Test Explorer' ? <Columns /> : i === 'Test Data' ? <Layers /> : <Columns />}
            </span>
            <span>{i}</span>
          </div>
        ))}
      </nav>
    </aside>
  )
}
