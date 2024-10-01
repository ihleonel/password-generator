import { useState } from "react"

const generator = () => {
  const password = Math.random().toString(36).slice(-8)
  return password
}

export default function App() {
  const [password, setPassword] = useState('')
  return (
    <div>
      <p>Password Generator</p>
      <button onClick={() => setPassword(generator())}>Generate</button>
      <div>{password}</div>
      <button>Copy</button>
    </div>
  )
}
