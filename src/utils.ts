import localforage from 'localforage'

export type Transaction = {
  id: string
  date: string // ISO date
  narration: string
  amount: number // negative = debit, positive = credit
  account?: string
  raw?: Record<string, string>
  category?: string
}

export type CategoryRule = { id: string; pattern: string; category: string }

export function parseAmount(v: string) {
  const n = Number(String(v).replace(/[,\s]/g, ''))
  return isNaN(n) ? 0 : n
}

export async function importCSV(file: File): Promise<Transaction[]> {
  const text = await file.text()
  const lines = text.split(/\r?\n/).filter(Boolean)
  if (lines.length < 2) return []

  const header = lines[0].split(',').map((h) => h.trim().toLowerCase())
  const col = (name: string) => header.findIndex((h) => h.includes(name))

  const idxDate = col('date')
  const idxNarr = col('narr') >= 0 ? col('narr') : col('description')
  const idxDebit = col('debit')
  const idxCredit = col('credit')
  const idxAmount = col('amount')

  const rows: Transaction[] = []

  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(',')
    const dateRaw = parts[idxDate] || ''
    const date = new Date(dateRaw).toISOString().slice(0, 10)
    const narration = (parts[idxNarr] || '').trim()

    let amount = 0
    if (idxAmount >= 0) {
      amount = parseAmount(parts[idxAmount])
    } else {
      const debit = parseAmount(parts[idxDebit])
      const credit = parseAmount(parts[idxCredit])
      amount = credit - debit
    }

    rows.push({
      id: crypto.randomUUID(),
      date,
      narration,
      amount,
      raw: {},
    })
  }

  return rows
}

export function categorizeTransactions(
  rows: Transaction[],
  rules: CategoryRule[]
): Transaction[] {
  const compiled = rules.map((r) => ({
    re: new RegExp(r.pattern, 'i'),
    cat: r.category,
  }))

  return rows.map((r) => {
    const match = compiled.find((c) => c.re.test(r.narration))
    return { ...r, category: match ? match.cat : r.category }
  })
}

export function monthSeries(rows: Transaction[]) {
  const map = new Map<string, number>()

  rows.forEach((r) => {
    if (r.amount < 0) {
      const key = r.date.slice(0, 7)
      map.set(key, (map.get(key) || 0) + -r.amount)
    }
  })

  const labels = Array.from(map.keys()).sort()
  const values = labels.map((l) => map.get(l) || 0)

  return { labels, values }
}

// storage
const STORE_KEY = 'rupeesense:v1'

export function saveToStorage(payload: {
  transactions: Transaction[]
  rules: CategoryRule[]
}) {
  localforage.setItem(STORE_KEY, payload)
}

export function loadFromStorage(): {
  transactions: Transaction[]
  rules: CategoryRule[]
} | null {
  try {
    const raw = (window as any).localStorage.getItem(STORE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}
