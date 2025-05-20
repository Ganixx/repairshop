import { getCustomer } from "@/lib/queries/getCustomer"
import * as Sentry from "@sentry/nextjs"
import { BackButton } from "@/components/BackButton"

export default async function CustomerFormPage({
    searchParams
}:{
    searchParams: Promise<{ [key : string] : string | undefined}>
}){
    try{
        const {customerId} = await searchParams
        if(customerId){
            const customer = await getCustomer(parseInt(customerId))

            if(!customer){
                return(
                    <>
                        <h2 className="text-2xl mb-2">Customer Id #{customerId} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            console.log(customer)
            //TODO: Add form
        }else{
            return(
                <h2>No customer Id provided</h2>
            )
        }
    }catch(error){
        if(error instanceof Error){
            Sentry.captureException(error)
            throw error
        }
        throw new Error("An unknown error occurred")
    }
}