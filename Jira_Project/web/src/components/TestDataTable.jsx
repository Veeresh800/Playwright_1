import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TestDataTable(){
  const [files, setFiles] = useState([])
  const [contents, setContents] = useState({})
  const [selected, setSelected] = useState(null)

  useEffect(()=>{
    axios.get('http://localhost:4000/api/testdata').then(r=>{
      setFiles(r.data.files || [])
      setContents(r.data.contents || {})
    }).catch(()=>{})
  },[])

  const data = contents[selected]

  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex gap-4">
        <div className="w-48">
          <h4 className="text-sm font-medium mb-2">Data Files</h4>
          <ul>
            {files.map(f=> <li key={f} onClick={()=>setSelected(f)} className={`py-2 px-2 rounded cursor-pointer ${selected===f? 'bg-gray-100':''}`}>{f}</li>)}
          </ul>
        </div>
        <div className="flex-1">
          {!selected && <div className="text-gray-500">Select a data file</div>}
          {selected && Array.isArray(data) && (
            <table className="min-w-full table-auto text-sm">
              <thead>
                <tr className="bg-gray-100">
                  {data[0].map((h,i)=>(<th key={i} className="px-3 py-2 border">{h}</th>))}
                </tr>
              </thead>
              <tbody>
                {data.slice(1).map((row,ri)=>(
                  <tr key={ri} className="hover:bg-gray-50">
                    {row.map((c,ci)=>(<td key={ci} className="px-3 py-2 border">{c}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {selected && !Array.isArray(data) && (
            <pre className="bg-gray-50 p-3 text-sm max-h-72 overflow-auto">{JSON.stringify(data, null, 2)}</pre>
          )}
        </div>
      </div>
    </div>
  )
}
