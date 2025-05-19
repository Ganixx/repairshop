
export default async function Template({
    children,
} : {
    children: React.ReactNode 
}){
    return(
        <div>
            <div className="animate-appear">
                {children}
            </div>
        </div>
    )
}