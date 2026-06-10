import React from 'react'

export default function DashboardOverview(){
  return (
    <div className="dashboard-card">
      <div className="text-xs text-gray-400 uppercase">Dashboard Overview</div>
      <h2>Workspace<br/>Summary</h2>
      <div className="subtitle">Overview of current test execution and metrics</div>

      <div className="mt-8">
        <div className="text-xs text-gray-400 uppercase">Metric</div>
        <div className="mt-4">
          <div className="text-sm text-gray-300">Total tests</div>
          <div className="text-2xl font-bold mt-2">128</div>
        </div>
      </div>
    </div>
  )
}
