import type { V2_MetaFunction } from "@remix-run/node"
import { useState } from "react"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

type TodoTask = {
  text: string
  isDone: boolean
}

export default function Index() {
  const [text, setText] = useState('')
  const [taskList, setTaskList] = useState<TodoTask[]>([])

  const pushTask = () => {
    if (!text) {
      return
    }

    setTaskList([...taskList, { text, isDone: false }])
    setText('')
  }

  const toggleTask = (index: number) => {
    const newTaskList = [...taskList]
    newTaskList[index].isDone = !newTaskList[index].isDone
    setTaskList(newTaskList)
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>ToDo App</h1>

      {/* フォーム */}
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />

        <div>
          <button onClick={pushTask}>add</button>
        </div>
      </div>

      {/* ToDoリスト */}
      <h2>ToDo List</h2>
      {taskList.map((task, index) => (
        <div key={index}>
          <div>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => toggleTask(index)}
            />
            <span>{task.text}</span>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}
