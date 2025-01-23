import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white shadow-md w-full'>
            <div className='flex p-2'>
                <Link href="/" className='mr-5'> Next.Js</Link>
                <Link href='/users'> Users</Link>
            </div>
        </nav>
    )

}

export default NavBar