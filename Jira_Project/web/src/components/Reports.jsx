import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Card({ title, value, color }){
  return (
    <div className="p-4 rounded shadow-sm bg-white">
      <div className="text-sm text-gray-500">{title}</div>
      <div className={`mt-2 text-2xl font-semibold ${color}`}>{value}</div>
    </div>
  )
}

export default function Reports(){
  const [stats, setStats] = useState(null)

  useEffect(()=>{
    axios.get('http://localhost:4000/api/reports').then(r=>setStats(r.data)).catch(()=>{})
  },[])

  if(!stats) return <div className="text-gray-500">Loading reports...</div>

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card title="Total" value={stats.total} color="text-gray-800" />
      <Card title="Passed" value={stats.passed} color="text-green-600" />
      <Card title="Failed" value={stats.failed} color="text-red-600" />
      <div className="col-span-3 bg-white rounded shadow p-4">
        <h4 className="font-medium mb-2">Recent Results</h4>
        <ul className="text-sm">
          {stats.results.slice(0,10).map((r,i)=> <li key={i} className="py-1 border-b">{r.name || r.stage || JSON.stringify(r).slice(0,80)}</li>)}
        </ul>
      </div>
    </div>
  )
}
