import React, { useState } from 'react'

interface Props {
    handleSubmit: (data: string) => void

}

const NewTodo = ({ handleSubmit }: Props) => {


    const [inputValue, setInputValue] = useState('')

    const onSubmit = () => {
        handleSubmit(inputValue)
        setInputValue('')
    }

    return (
        <div className="mb-3">
            <p>Add new note</p>
            <label htmlFor="textTodo" className="form-label" aria-placeholder="hello"></label>
            <textarea onChange={(e) => setInputValue(e.target.value)} className="form-control mb-3" id="textTodo" rows={3} value={inputValue}></textarea>
            <button onClick={onSubmit} className="btn btn-primary" value={inputValue}>Submit</button>
        </div>

    )
}

export default NewTodo