import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [input, setInput] = useState('')

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', margin: '2rem' }}>
      <h1>🗓️ SlickPlanner</h1>
      <p>Starter app powered by Vite + React + TypeScript.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.trim()) return
          setTasks((t) => [input.trim(), ...t])
          setInput('')
        }}
      >
        <input
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}