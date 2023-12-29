import { FC, memo, useState } from 'react'
import { Plus } from 'lucide-react';
import PostNewSheet from '../PostNewSheet';

type Props = {
    title: string;
}

const TableTop: FC<Props> = memo(({ title }) => {
    const [isOpen, setIsOpen] = useState(false)
    const openSheet = () => {
        setIsOpen(true)
    }

    return (
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-gray-200">
            <div className='flex items-center'>
                <p className="text-xl font-semibold text-gray-700 mr-1">{title}</p>
                <span className='cursor-pointer hover:bg-gray-100 rounded-md  p-0.5' onClick={openSheet}>
                    <Plus size={18} color="#808080" />
                </span>
            </div>
            <PostNewSheet isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
})

export default TableTop