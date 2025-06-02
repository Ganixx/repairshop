import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults"
import CustomerSearch from "./CustomerSearch"
import CustomerTable from "./CustomerTable"


export const metadata = {
    title: "Search Customers",
}

export default async function Customers({
    searchParams,
}:{
    searchParams: Promise<{ [key: string] : string| undefined }>
}) {
        
    const { searchText } = await searchParams
        
    if(!searchText) return <CustomerSearch />

    //query database
    const results = await getCustomerSearchResults(searchText)
    //return results
    return (
        <>
            <CustomerSearch />
            { results.length ? <CustomerTable data={results} /> : (
                <p className="mt-4">No results found</p>
            )}
        </>
    )
}