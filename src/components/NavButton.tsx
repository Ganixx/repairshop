import {LucideIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

type NavButtonProps = {
    icon : LucideIcon,
    label :  string,
    href?: string,
}

export default function NavButton(
    {icon:Icon, label, href}: NavButtonProps
){
    return(
        <Button 
            variant="ghost"
            aria-label={label}
            title={label}
            className="rounded-full"
            size="icon"
            asChild
        >
            <Link href={href || "/"}>
                <Icon />
            </Link>
        </Button>
    )           
}