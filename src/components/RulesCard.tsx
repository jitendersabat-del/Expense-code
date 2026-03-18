
import React, { useState } from 'react'
import { CategoryRule } from '../utils'
export default function RulesCard({ rules, onChange }: { rules: CategoryRule[], onChange: (r: CategoryRule[])=>void }){
  const [pattern, setPattern] = useState('')
  const [category, setCategory] = useState('')
  function addRule(){ if(!pattern || !category) return; onChange([...rules, { id: crypto.randomUUID(), pattern, category }]); setPattern(''); setCategory('') }
  function removeRule(id: string){ onChange(rules.filter(r=>r.id!==id)) }
  return (
    <div>
      <h3>Auto-categorization rules</h3>
      <div className='grid columns-2'>
        <input placeholder='Pattern (regex or keywords e.g., swiggy|zomato)' value={pattern} onChange={e=>setPattern(e.target.value)} />
        <input placeholder='Category (e.g., Food & Dining)' value={category} onChange={e=>setCategory(e.target.value)} />
      </div>
      <div style={{marginTop:8}}>
        <button className='button' onClick={addRule}>Add rule</button>
      </div>
      <ul>
        {rules.map(r => (
          <li key={r.id} style={{display:'flex', gap:8, alignItems:'center', padding:'8px 0'}}>
            <code>/{r.pattern}/</code>
            <span className='badge'>{r.category}</span>
            <button className='button secondary' onClick={()=>removeRule(r.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
