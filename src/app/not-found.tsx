import Image from "next/image"
 
export const metadata = {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
}

export default async function NotFound(){
    return(
        <div className="px-2 w-full">
            <div className="flex flex-col justify-center items-center 
            h-dvh gap-4">
                <h2 className="text-2xl font-bold">Page Not Found</h2>
                <Image src="/images/not-found-1024x1024.png"
                width={300}
                height={300}
                alt="Page Not Found"
                priority={true}
                title="Page Not Found"
                sizes="300px"
                className="rounded-xl"
                />
            </div>
        </div>
    )
}