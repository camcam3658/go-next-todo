import { FC, memo } from 'react'

type TableCellProps = {
    text?: string | number | null;
    isLast?: boolean;
}

const TableCell: FC<TableCellProps> = memo(({ text, isLast }) => {
    return (
        <td className={`cursor-pointer whitespace-nowrap ${isLast ? '' : 'border-r'}`}>
            <div className="px-3 py-2">
                <div className="flex items-center gap-x-3">
                    <span className="block text-sm text-gray-500">{text}</span>
                </div>
            </div>
        </td>
    )
})

export default TableCell