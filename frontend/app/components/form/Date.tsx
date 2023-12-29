import { FC } from "react"
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";

type Props = {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const Date: FC<Props> = ({ date, setDate }) => {
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <p className={`w-10/12 cursor-pointer hover:bg-gray-100 py-1.5 px-3 rounded-md text-sm ${date ? '' : 'text-gray-500 '}`}>{date ? format(date, "yyyy年MM月dd日") : 'Empty'}</p>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <Input type="hidden" name="deadline" value={date ? format(date, "yyyy-MM-dd") : ''}></Input>
        </>
    )
}

export default Date;