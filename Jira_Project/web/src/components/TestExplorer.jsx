import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TestExplorer(){
  const [files, setFiles] = useState([])
  const [selected, setSelected] = useState(null)
  const [fileData, setFileData] = useState(null)

  useEffect(()=>{
    axios.get('http://localhost:4000/api/tests').then(r=>setFiles(r.data.files || []))
  },[])

  function openFile(name){
    setSelected(name)
    axios.get('http://localhost:4000/api/tests/file', { params: { path: name } }).then(r=>setFileData(r.data)).catch(()=>setFileData(null))
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-white rounded shadow p-3">
        <h3 className="text-sm font-medium mb-2">Test Files</h3>
        <ul>
          {files.map(f=> (
            <li key={f} onClick={()=>openFile(f)} className={`py-2 px-2 rounded cursor-pointer ${selected===f? 'bg-gray-100':''}`}>{f}</li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 bg-white rounded shadow p-3">
        {!fileData && <div className="text-gray-500">Select a test file to view cases</div>}
        {fileData && (
          <div>
            <h3 className="font-semibold">{fileData.file}</h3>
            <div className="mt-2">
              <h4 className="text-sm font-medium">Test Cases</h4>
              <ul className="mt-2">
                {fileData.tests.map((t,i)=> <li key={i} className="py-1 text-sm">{t}</li>)}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium">Source</h4>
              <pre className="mt-2 text-xs bg-gray-50 p-2 overflow-auto max-h-60">{fileData.src}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
