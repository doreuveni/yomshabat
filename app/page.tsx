
'use client'

import { useEffect, useState } from "react"
import MainScreen from "./components/MainScreen"
import { useRouter } from "next/navigation"
import { getTodos, removeTodo } from "./utils/todoStorage"




export default function Home() {
  const [todos, setTodos] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    setTodos(getTodos())
  }, [])

  const updateTodos = (index: number) => {
    const newTodos = [...todos]
    // Then use splice on the copy, not the original
    newTodos.splice(index, 1)
    // Finally, set the state with the modified copy
    setTodos(newTodos)
  }


  return (
    <div className='container p-4'>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => router.push('/new')}
          className="btn btn-primary"
        >
          + Add Note
        </button>
      </div>
      <MainScreen onDelete={updateTodos} todosArray={todos} />
    </div >
  )
}
