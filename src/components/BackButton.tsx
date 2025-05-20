"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ButtonHTMLAttributes } from "react"

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string,
    className?: string,
    variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary" | null | undefined,

}

export function BackButton({title,className,variant, ...props}:BackButtonProps){
    const router = useRouter()

    return(
        <Button
        variant={variant}
        className={className}
        onClick={() => router.back()}
        title={title}
        {...props}
        >
            {title}
        </Button>
    )
}
