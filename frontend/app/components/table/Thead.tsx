import { FC, memo } from "react";
import TableHead from "./TableHead";
import { AlignLeft, CalendarDays, ClipboardList, Loader, Scale } from "lucide-react";

const trList = [
    {
        title: 'タスク',
        icon: <ClipboardList size={16} color="#808080" />,
        key: 'title'
    },
    {
        title: 'ステータス',
        icon: <Loader size={16} color="#808080" />,
        key: 'status'
    },
    {
        title: '期限',
        icon: <CalendarDays size={16} color="#808080" />,
        key: 'deadline'
    },
    {
        title: '優先度',
        icon: <Scale size={16} color="#808080" />,
        key: 'priority'
    },
    {
        title: 'メモ',
        icon: <AlignLeft size={16} color="#808080" />,
        key: 'memo'
    },
]

const Thead: FC = memo(() => {
    return (
        <thead className="border-t-0">
            <tr>
                {trList.map((trInfo) => {
                    return (
                        <TableHead key={trInfo.key} title={trInfo.title} icon={trInfo.icon} />
                    )
                })}
            </tr>
        </thead>
    )
})

export default Thead