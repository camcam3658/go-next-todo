import { FC } from "react"
import { SheetHeader, SheetTitle } from "../ui/sheet";
import { ClipboardList } from "lucide-react";
import { Input } from "../ui/input";

const SheetTitleInput: FC = () => {
    return (
        <SheetHeader>
            <SheetTitle className="flex items-center">
                <span><ClipboardList size={30} color="#808080" /></span>
                <Input defaultValue={'タスク'} name="title" className="text-3xl focus-visible:ring-0 border-none shadow-none w-4/5 text-gray-800" autoFocus />
            </SheetTitle>
        </SheetHeader>
    )
}

export default SheetTitleInput;