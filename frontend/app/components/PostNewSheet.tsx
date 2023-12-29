import { FC, ReactNode, useEffect, useState } from "react"
import { Sheet, SheetClose, SheetContent, SheetFooter } from './ui/sheet';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { AlignLeft, CalendarDays } from "lucide-react";
import { Form, useNavigation } from "@remix-run/react";
import FormLabel from "./form/Label";
import SheetTitleInput from "./form/SheetTitleInput";
import Date from "./form/Date";
import { ButtonLoading } from "./ui/ButtonLoading";

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const PostNewSheet: FC<Props> = ({ isOpen, setIsOpen }) => {
    const [date, setDate] = useState<Date>();
    const navigation = useNavigation();
    useEffect(() => {
        if (navigation.state === 'idle') {
            setDate(undefined);
            setIsOpen(false);
        }
    }, [navigation.state])
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className='max-w-2xl'>
                <Form method="post" action="/todos">
                    <SheetTitleInput />
                    <div className="grid gap-4 py-4">
                        <FormLayout>
                            <FormLabel text="メモ" icon={<AlignLeft size={16} color="#808080" />} />
                            <Input placeholder="Empty" name="memo" className="w-10/12 cursor-pointer focus-visible:ring-0 border-none shadow-none hover:bg-gray-100 transition-shadow duration-200 ease-in-out focus-visible:shadow-3xl focus-visible:bg-white focus-visible:p-3" />
                        </FormLayout>
                    </div>
                    <FormLayout>
                        <FormLabel text="期限" icon={<CalendarDays size={16} color="#808080" />} />
                        <Date date={date} setDate={setDate} />
                    </FormLayout>
                    <Footer />
                </Form>
            </SheetContent>
        </Sheet>
    )
}

export const FormLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center justify-between">
            {children}
        </div>
    )
}

export const Footer = () => {
    const navigation = useNavigation();
    const isAdding = navigation.state === 'submitting';
    return (
        // <SheetFooter className="mt-4">
        //     <SheetClose asChild>
        //         {isAdding ? <ButtonLoading /> : <Button type="submit" disabled={isAdding}>Save changes</Button>}
        //     </SheetClose>
        // </SheetFooter>
        <button type="submit">Save changes</button>
    )
}

export default PostNewSheet