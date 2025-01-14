
'use client'

import { useState } from "react"
import NewTodo from "./components/NewTodo"
import MainScreen from "./components/MainScreen"



export default function Home() {
  const [todos, setTodos] = useState<string[]>([])

  const handleTodo = (data: string) => {
    setTodos([...todos, data])
  }

  const [updatedTodos, setUpdatedTodos] = useState<string[]>([])

  const updateTodos = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div >
      <NewTodo capturedText={handleTodo} />
      <MainScreen handleDelete={updateTodos} todos={todos} />
    </div>
  )
}
