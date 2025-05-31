import Form from 'next/form'
import { Input } from '@/components/ui/input'
import SearchButton from '@/components/SearchButton'

export default function CustomerSearch(){
    return (
        <Form 
        className="flex gap-2 items-center" 
        action="/customers"
    >
        <Input
            className="w-full"
            name="searchText"
            placeholder="Search Customers"
            type="text"
        />
        <SearchButton />
    </Form>
    )
}