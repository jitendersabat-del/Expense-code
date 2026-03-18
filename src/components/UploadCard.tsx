
import React, { useRef, useState } from 'react'
import { importCSV, Transaction } from '../utils'
export default function UploadCard({ onData }: { onData: (rows: Transaction[])=>void }){
  const fileRef = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<string>('')
  async function handleFile(file: File){ setStatus('Parsing…'); const rows = await importCSV(file); onData(rows); setStatus(`Imported ${rows.length} rows`) }
  return (
    <div>
      <h3>Import bank CSV</h3>
      <p>Upload a CSV export from your bank statement. Columns with Date/Narration and Amount (or Debit/Credit) are supported.</p>
      <div style={{display:'flex', gap:8}}>
        <input ref={fileRef} type='file' accept='.csv' onChange={(e)=>{ const f=e.target.files?.[0]; if(f) handleFile(f) }} />
      </div>
      <p style={{color:'#555'}}>{status}</p>
    </div>
  )
}
