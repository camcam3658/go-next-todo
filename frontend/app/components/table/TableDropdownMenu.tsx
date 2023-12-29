import React, { FC, memo, useCallback, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import {
    Trash2,
    FileEdit,
    Info,
} from "lucide-react"
import { Button } from '~/components/ui/button';
import Icon from '~/components/ui/Icon';
import { CgMenuGridO } from "react-icons/cg";

type TableDropdownMenuProps = {
    text: string;
    modalText: string;
}

const TableDropdownMenu: FC<TableDropdownMenuProps> = memo(({ text, modalText }) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <Icon icon={<CgMenuGridO />} size='25px' color='#707680' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>{text}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Info className="mr-2 h-4 w-4" />
                            <span className="text-xs cursor-pointer flex-1">詳細</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FileEdit className="mr-2 h-4 w-4" />
                            <span className="text-xs cursor-pointer flex-1">編集</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span className="text-xs cursor-pointer flex-1">削除</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
})

export default TableDropdownMenu