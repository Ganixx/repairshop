import { getTicket } from "@/lib/queries/getTicket"
import * as Sentry from "@sentry/nextjs"
import { BackButton } from "@/components/BackButton"
import { getCustomer } from "@/lib/queries/getCustomer"


/*
1. we expect either customerid or ticketid, not both.
*/
export default async function TicketFormPage({
    searchParams
}:{
    searchParams: Promise<{ [key : string] : string | undefined}>
}){
    try{
        const {ticketId, customerId } = await searchParams

        if(!ticketId && !customerId){
            return(
                <>
                    <h2 className="text-2xl mb-2">No ticket or customer Id provided</h2>
                    <BackButton title="Go Back" variant="default" />
                </>
            )
        }
        
        if(customerId){
            const customer = await getCustomer(parseInt(customerId))
            if(!customer){
                return(
                    <>
                        <h2>Customer Id #{customerId} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }

            if(!customer.active){
                return(
                    <>
                        <h2>Customer Id #{customerId} is not active</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            console.log("customer", customer)
            // Return the customer details and ticket form
        }

        if(ticketId){
            const ticket = await getTicket(parseInt(ticketId))
            if(!ticket){
                return(
                    <>
                        <h2>Ticket Id #{ticketId} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }

            const customer = await getCustomer(ticket.customerId);

            //return the ticketform
            console.log("ticket", ticket)
            console.log("customer", customer)
        }
    }catch(error){
        if(error instanceof Error){
            Sentry.captureException(error)
            throw error
        }
    }
}