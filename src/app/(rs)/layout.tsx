import Header from "@/components/Header";

export default async function RSLayout({
    children,
} : {
    children: React.ReactNode 
}){
    return(
        <div className="mx-auto w-full max-w-7xl">
            <Header />
            <div className="px-4 py-2">
                {children} 
                {/* ==> <Template>children</Template> when we use both layout and template */}
            </div>
        </div>
    )
}


// In this layout, Header is rendered once, but the children are rendered based on the context or state.
//If we do the same in template, it will render the children based on the context or state, as well as the Header every time.
//when we use both layout and template, layouts fixed components like(Header) is rendered first,then
//the children is passed to the template, and the template is rendered.


// This is usefull when we a fixed component like(Header) 
// and a dynamic component like(children) while also has a layout
