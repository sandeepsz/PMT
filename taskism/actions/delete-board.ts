"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function deleteBoard(id : string, formData: FormData) {
       
    await db.board.delete({
            where:{
                id
            }
    })
        revalidatePath("/organization/org_2ZnrfXbK3QlZlYpGJVSufH8oRY8")
    }
