import { ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "./button"


export function ButtonLoading() {
    return (
        <Button disabled className="px-2.5">
            <ReloadIcon className="mr-2.5 h-4 w-4 animate-spin" />
            Please wait
        </Button>
    )
}
