import { FC, memo } from 'react'
import TableDropdownMenu from './TableDropdownMenu'

type TableCellActionsProps = {
    text: string;
    modalText: string;
}

const TableCellActions: FC<TableCellActionsProps> = memo(({ text, modalText }) => {
    return (
        <td className="whitespace-nowrap">
            <div className="px-1 py-2.5">
                <div className="flex items-center gap-x-3">
                    <span className="block text-sm text-gray-500">
                        <TableDropdownMenu text={text} modalText={modalText} />
                    </span>
                </div>
            </div>
        </td>
    )
})

export default TableCellActions