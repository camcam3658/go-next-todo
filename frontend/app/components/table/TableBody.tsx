import { FC, ReactNode, memo } from "react";

type Props = {
    children: ReactNode
}

const TableBody: FC<Props> = memo(({ children }) => {
    return (
        <tbody className="divide-y divide-gray-200">
            {children}
        </tbody>
    )
})

export default TableBody