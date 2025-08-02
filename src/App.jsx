import { useState } from "react"
import usePasswordGenerator from "./hooks/PasswordGenerator"
import { use } from "react"

const generate = (length, special) => {
  let result = usePasswordGenerator(length, special)

const copy = (text) => {
  navigator.clipboard.writeText(text)
}

export default function App() {
  const result = usePasswordGenerator()
  const [password, setPassword] = useState('')
  const [special, setSpecial] = useState(false)
  const [length, setLength] = useState(8)
  return (
    <>
      <h3>Password Generator</h3>
      <label>
        <input
          type="checkbox"
          value={special}
          onChange={() => setSpecial(!special)}/>
        Include special characters
      </label>
      <label htmlFor="length">Length</label>
      <input
        type="number"
        className="input"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <button
        className="btn-primary"
        onClick={() => generate(length, special)}
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
