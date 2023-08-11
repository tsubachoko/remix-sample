import type { V2_MetaFunction } from "@remix-run/node"
import { useState } from "react"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const [text, setText] = useState('')

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>ToDo App</h1>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />

        <div>{text}</div>
      </div>

      <h2>ToDo List</h2>
    </div>
  )
}
