import { FC, ReactNode, memo } from "react";

type Props = {
    children: ReactNode
}

const TableContainer: FC<Props> = memo(({ children }) => {
    return (
        <div className='p-10 h-full w-11/12 mx-auto'>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden pb-7">
                {children}
            </div>
        </div >
    )
})

export default TableContainer