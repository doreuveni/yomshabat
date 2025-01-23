import React from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';

interface Props {
    sortOrder?: string
    sortDirection?: string
}

interface User {
    id: number
    name: string
    email: string
}
const UsersTable = async ({ sortOrder, sortDirection }: Props) => {


    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        { cache: 'no-store' })
    const users: User[] = await res.json()

    const sortedUsers = sort(users)[sortDirection === 'desc' ? 'desc' : 'asc'](
        (sortOrder === 'email'
            ? user => user.email
            : user => user.name)
    )



    return (
        <>

            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>
                                <Link href="/users?sortOrder=name">Name {sortOrder === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}</Link>
                            </th>
                            <th>
                                <Link href="/users?sortOrder=email">Email {sortOrder === 'email' && (sortDirection === 'asc' ? '↑' : '↓')}</Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedUsers.map(user => <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td> </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UsersTable