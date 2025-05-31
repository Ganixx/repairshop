import Form from 'next/form'
import { Input } from '@/components/ui/input'
import SearchButton from '@/components/SearchButton'

export default function TicketSearch(){
    return (
        <Form 
        className="flex gap-2 items-center" 
        action="/tickets"
    >
        <Input
            className="w-full"
            name="searchText"
            placeholder="Search Tickets"
            type="text"
        />
        <SearchButton />
    </Form>
    )
}