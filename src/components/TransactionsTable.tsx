
import React from 'react'
import { Transaction } from '../utils'
export default function TransactionsTable({ rows, onReplace }: { rows: Transaction[], onReplace: (r: Transaction[])=>void }){
  function editCategory(id: string, value: string){ const next = rows.map(r => r.id===id? { ...r, category: value } : r); onReplace(next) }
  return (
    <div>
      <h3>Transactions</h3>
      <table>
        <thead>
          <tr><th>Date</th><th>Description</th><th>Category</th><th style={{textAlign:'right'}}>Amount (₹)</th></tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td>{r.date}</td>
              <td>{r.narration}</td>
              <td><input value={r.category||''} onChange={e=>editCategory(r.id, e.target.value)} /></td>
              <td style={{textAlign:'right', color: r.amount<0? '#e53935':'#43a047'}}>{r.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
