import {FC, ReactNode } from "react";
import { cva } from "../../styled-system/css";


type Props = {
    children: ReactNode
}

const LoginForm = cva({
    base : {
    position: 'relative',
    bg: '#ffffff',
    padding: '45px',
    textAlign: 'center',
    maxWidth: '360px',
    margin: '0 auto',
    }
});

export const LoginBox: FC<Props> = ({ children }) => {
    return (
        <div className={LoginForm()}>
        { children }
        </div>
    )
}