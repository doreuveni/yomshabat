import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const adminLayout = ({ children }: Props) => {
    return (
        <div>
            <div className='flex'>
                <aside className="bg-slate-200 p-5 mr-5">Admin Sidebar</aside>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default adminLayout