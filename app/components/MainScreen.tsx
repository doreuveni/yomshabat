import React from 'react'
import styles from './MainScreen.module.css'


interface Props {
    todosArray: string[]
    onDelete: (index: number) => void
}


const MainScreen = ({ todosArray, onDelete }: Props) => {
    if (!todosArray) {
        return <div>no todos available</div>
    }
    return (
        <>
            <div className="hero">
                <div className="hero-content flex justify-center w-full">
                    <div className="max-w-full md:max-w-md">
                        <h1 className="text-4xl font-bold mb-3 text-center">Hello Victor!</h1>
                    </div>
                </div>
            </div>
            <div className={styles.stickyNotesGrid}>
                {todosArray.map((todo, index) => (
                    <div className={styles.stickyNoteContainer} key={index}>
                        <textarea className="rounded-lg w-full
                                             bg-yellow-50 
                                             shadow-lg 
                                             border-none 
                                             p-2.5 
                                             min-h-[100px] 
                                             resize-none"
                            value={todo} readOnly />
                        <button className={styles.deleteButton} onClick={() => onDelete(index)}>X</button>
                    </div>
                ))}
            </div>

        </>
    )
}

export default MainScreen