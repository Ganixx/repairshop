import { db } from "@/db"
import { eq } from "drizzle-orm"
import { customers } from "@/db/schema"

export async function getCustomer(id: number){
    const customer = await db.select()
        .from(customers)
        .where(eq(customers.id,id))

    return customer[0]
}