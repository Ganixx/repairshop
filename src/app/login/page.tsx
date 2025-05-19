import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {Button} from "@/components/ui/button";


export default function LoginPage(){
    return(
        <main className="flex flex-col h-dvh items-center gap-6 text-4xl p-4">
            <h2>Login Page</h2>
            <Button asChild>
                <LoginLink>Sign In</LoginLink>
            </Button>
        </main>
    )
}