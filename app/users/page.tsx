import Link from "next/link";
import UsersTable from "./UsersTable";

interface Props {
    searchParams: {
        sortOrder: string;
        sortDirection: string;
    }
}

const UsersPage = ({ searchParams: { sortOrder, sortDirection } }: Props) => {
    return (
        <>
            <Link href="/users/new" className='btn'>New User</Link>
            <UsersTable
                sortOrder={sortOrder}
                sortDirection={sortDirection} />
        </>
    )
}

export default UsersPage
