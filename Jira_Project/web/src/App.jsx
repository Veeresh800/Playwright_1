import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import TreeView from './components/TreeView'
import TestExplorer from './components/TestExplorer'
import TestDataTable from './components/TestDataTable'
import Reports from './components/Reports'
import DashboardOverview from './components/DashboardOverview'
import axios from 'axios'

const TOP_TABS = ['Dashboard','Test Explorer','History & Trends','Execution Timeline','Test Data','Schedules','Settings']

export default function App() {
  const [active, setActive] = useState('Test Explorer')
  const [structure, setStructure] = useState(null)

  useEffect(() => {
    axios.get('/api/structure').then(r => setStructure(r.data)).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen">
      <header className="px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-600 to-indigo-600 flex items-center justify-center text-white font-bold">H</div>
            <div>
              <div className="text-xs text-gray-400">HEX AWARE</div>
              <div className="text-sm text-gray-300">TEST DASHBOARD — FLIGHT FAMILY</div>
            </div>
          </div>

          <nav className="topnav">
            {TOP_TABS.map(t => (
              <div key={t} onClick={()=>setActive(t)} className={`topnav-tab ${active===t? 'active':''}`}>{t}</div>
            ))}
          </nav>

          <div className="controls flex items-center gap-3">
            <select className="select">
              <option>Chromium</option>
              <option>Firefox</option>
            </select>
            <select className="select">
              <option>DEV</option>
              <option>STAGE</option>
            </select>
            <button className="btn">Tags</button>
          </div>
        </div>
      </header>

      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="path-list">
            <div className="file-path">C:\\Jira_Project_8June\\Jira_Project\\tests\\SCRUM-6\\flight-search.spec.ts</div>
            <div className="file-path mt-2">C:\\Jira_Project_8June\\Jira_Project\\tests\\seed.spec.ts</div>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <div className="dashboard-card">
                <div className="text-xs text-gray-400 uppercase">Dashboard Overview</div>
                <h2>Workspace<br/>Summary</h2>
                <div className="subtitle">Overview of current test execution and metrics</div>

                <div className="mt-8">
                  <div className="text-xs text-gray-400 uppercase">Metric</div>
                  <div className="mt-4">
                    <div className="text-sm text-gray-300">Total tests</div>
                    <div className="text-2xl font-bold mt-2">{/* placeholder */} 128</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="chart-placeholder"></div>
            </div>
          </div>

          <div className="mt-8">
            {active === 'Dashboard' && <TreeView data={structure} />}
            {active === 'Test Explorer' && <TestExplorer />}
            {active === 'Test Data' && <TestDataTable />}
            {active === 'Reports' && <Reports />}
          </div>
        </div>
      </div>
    </div>
  )
}
