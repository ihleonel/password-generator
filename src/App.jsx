import { useState } from "react"
import usePasswordGenerator from "./hooks/PasswordGenerator"

export default function App() {
  const result = usePasswordGenerator()
  const [password, setPassword] = useState('')
  return (
    <div>
      <p>Password Generator</p>
      <button onClick={() => setPassword(result)}>Generate</button>
      <div>{password}</div>
      <button>Copy</button>
    </div>
  )
}
