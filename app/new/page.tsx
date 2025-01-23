'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import NewTodo from '../components/NewTodo'
import { addTodo } from "../utils/todoStorage"



export default function NewTodoPage() {
    const router = useRouter()

    const handleAddTodo = (data: string) => {
        addTodo(data)
        router.push('/')
    }

    return (
        < div className="container mx-auto p-4">
            <button
                onClick={() => router.push('/')}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                back To Main
            </button>



            <NewTodo handleSubmit={addTodo} />
        </div>
    )


}


