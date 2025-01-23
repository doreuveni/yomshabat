'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const router = useRouter()

const NewUserPage = () => {
    return (
        <button className='btn btn-primary' onClick={() => router.push('/users')}> Create</button>)
}

export default NewUserPage