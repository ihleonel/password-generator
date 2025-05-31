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
      <p>Password Generator</p>
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
      <input type="number" id="length" name="length" />
      <button onClick={() => setPassword(result)}>Generate</button>
      <div>{password}</div>
      <button onClick={() => copy(password)}>Copy</button>
    </>
  )
}
