import React, { FC } from "react"
import { Label } from "../ui/label"

type Props = {
    text: string;
    icon: React.ReactNode;
}

const FormLabel: FC<Props> = ({ text, icon }) => {
    return (
        <Label className="text-right text-gray-400 flex items-center text-base font-normal">
            <span className="mr-1">{icon}</span>
            <span>{text}</span>
        </Label>
    )
}

export default FormLabel;