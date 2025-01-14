'use client'
import React from 'react'

interface Props {
    todos: string[]
    handleDelete: (index: number) => void
}

const MainScreen = ({ todos, handleDelete }: Props) => {


    return (
        <div>
            <p className="main-victor-p">Hello Victor!</p>
            <div
                className="container"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    padding: '10px'
                }}
            >

                {todos.map((todo, index) => (
                    <div key={index}
                        className="sticky-note-container"
                    >
                        <textarea
                            value={todo}
                            readOnly
                            className="sticky-note"

                        ></textarea>
                        <button
                            onClick={() => handleDelete(index)}
                            className="delete-button"
                        >X</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MainScreen