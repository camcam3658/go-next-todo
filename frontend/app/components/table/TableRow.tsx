import { FC, ReactNode, memo } from "react";

type Props = {
    children: ReactNode
}

const TableRow: FC<Props> = memo(({ children }) => {
    return (
        <tr>
            {children}
        </tr>
    )
})

export default TableRow