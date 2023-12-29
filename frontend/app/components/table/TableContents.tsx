import { FC, memo } from 'react'
import TableTop from './TableTop'
import Table from './Table'
import Thead from './Thead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableCell from './TableCell'
import { TodoListType } from '~/types/Todo'

type Props = {
    todos: TodoListType[];
}

const TableContents: FC<Props> = memo(({ todos }) => {
    return (
        <>
            <TableTop title='TODO' />
            <Table>
                <Thead />
                <TableBody>
                    {todos.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell text={row.title} />
                            <TableCell text={row.status} />
                            <TableCell text={row.deadline} />
                            <TableCell text={row.priority} />
                            <TableCell text={row.memo} isLast={true} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
})

export default TableContents