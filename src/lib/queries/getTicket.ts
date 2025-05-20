import { db } from "@/db"
import { eq } from "drizzle-orm"
import { tickets } from "@/db/schema"

export async function getTicket(id: number){
    const ticket = await db.select()
        .from(tickets)
        .where(eq(tickets.id,id))

    return ticket[0]
}