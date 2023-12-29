import React, { FC, memo } from 'react'

type TableHeadProps = {
    title?: string | null;
    icon: React.ReactNode;
}

const TableHead: FC<TableHeadProps> = memo(({ title, icon }) => {
    return (
        <th scope="col" className="px-3 py-2 text-left" key={title}>
            <div className="flex items-center gap-x-2">
                {icon}
                <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">{title}</span>
            </div>
        </th>
    )
})

export default TableHead