'use client'
import React, { useState } from 'react'

interface Props {
    capturedText: (data: string) => void

}

const NewTodo = ({ capturedText }: Props) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = () => {
        capturedText(inputValue)
        setInputValue('')
    }

    return (
        <div className="form-group">
            <label htmlFor="todotext" style={{ marginBottom: '10px', textAlign: 'center' }}> Write a new todo</label>
            <textarea onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                style={{ marginBottom: '10px', backgroundColor: '#FFFFE0}' }}
                className="form-control"
                id="todotext"
                rows={3}
                placeholder="Victor Nahum" />
            <button onClick={handleSubmit} className="btn btn-primary" style={{ marginBottom: '10px' }}>Submit</button>
        </div>
    )
}

export default NewTodo

