import { useState } from "react"
import usePasswordGenerator from "./hooks/PasswordGenerator"

const copy = (text) => {
  navigator.clipboard.writeText(text)
}

export default function App() {
  const result = usePasswordGenerator()
  const [password, setPassword] = useState('')
  const [special, setSpecial] = useState(false)
  return (
    <>
      <h3>Password Generator</h3>
      <label>
        <input
          type="checkbox"
          id="special"
          name="special"
          value={special}
          onChange={() => setSpecial(!special)}/>
        Include special characters
      </label>
      <label htmlFor="length">Length</label>
      <input type="number" className="input" id="length" name="length" value={result.length} readOnly/>
      <button
        className="btn-primary"
        onClick={() => setPassword(result)}
      >
        Generate
      </button>
      <div className="pass-container">
        <button
          className="btn-primary btn-copy"
          onClick={() => copy(password)}
          dataTooltip="Copied!"
        >
          Copy
        </button>
        {password}
      </div>
    </>
  )
}
