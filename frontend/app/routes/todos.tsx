import { Outlet } from '@remix-run/react'
import { FC } from 'react'
import styles from '../styles/layout.module.css'
import Header from '../components/Header'
import { ActionFunction, json } from '@remix-run/node'
import { createTodo } from '../../model/todo.server'

export const action: ActionFunction = async ({ request }: { request: Request }) => {
    const todoId = await createTodo(request);
    console.log(todoId);
    
    return json({ message: 'success' });
}

const TodoLayout: FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.flexColumn}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default TodoLayout