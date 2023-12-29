import { FC } from 'react'
import TableContainer from '~/components/table/TableContainer'
import TableContents from '~/components/table/TableContents'
import { TodoListType } from '~/types/Todo'

const todos: TodoListType[] = [
    {
        id: 1,
        title: 'test',
        status: 'test',
        deadline: 'test',
        priority: 'test',
        memo: 'test',
    },
]

const Todos: FC = () => {
    return (
        <TableContainer>
            <TableContents todos={todos} />
        </TableContainer>
    )
}

export default Todos