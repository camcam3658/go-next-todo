import React, { FC, ReactNode, memo } from "react";

type Props = {
    children: ReactNode
}

const Table: FC<Props> = memo(({ children }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200 border-b">
            {children}
        </table>
    )
})

export default Table