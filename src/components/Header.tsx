import {HomeIcon , File, UsersRound, LogOut} from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {Button} from "@/components/ui/button";

export default function Header(){
    return(
        <header className="animate-slide bg-background h-12 p-2 border-b sticky
        top-0 z-10">
            <div className="flex h-8 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <Link href="/home" title="Home" className="ml-0
                    flex items-center justify-center gap-2">
                        <h1 className="hidden sm:block
                        text-xl font-bold mb-1">Computer Repair Shop</h1>
                    </Link>
                    <NavButton icon={HomeIcon} label="Home" href="/home" />
                </div>
                <div 
                className="flex items-center">
                <NavButton icon={File} label="Tickets" href="/tickets" />
                <NavButton icon={UsersRound} label="Customers" href="/customers" />
                <ModeToggle
                aria-label="Mode Toggle"
                />
                <Button 
                    variant="ghost"
                    size="icon"
                    aria-label="Logout"
                    title="Logout"
                    className="rounded-full"
                    asChild
                >
                    <LogoutLink>
                        <LogOut />
                    </LogoutLink>
                </Button>
                </div>
            </div>
        </header>
    )
}