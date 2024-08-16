import { Button } from "@/components/ui/button"
import Image from "next/image"


interface SubmitButtonProps {
    children: React.ReactNode
    className?: string
    isLoading: boolean
}


const SubmitButton = ({ children, className, isLoading }: SubmitButtonProps) => {
    return (
        <div>
            <Button type="submit" disabled={isLoading} className={className ??
                'shad-primary-btn w-full'

            }>
                {isLoading ? (
                    <div className="flex items-center gap-4">
                        <Image src="/assets/icons/loader.svg" alt="loader" width={24} height={24} className="animate-spin" />
                        Please wait ...
                    </div>
                ) : children}
            </Button>
        </div>
    )
}

export default SubmitButton