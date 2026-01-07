// src/actions.ts
'use server'

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function addEntry(formData: FormData) {
  const name = formData.get("name") as string
  const message = formData.get("message") as string

  if (!name || !message) return

  // Save to database
  await prisma.guestMessage.create({
    data: {
      name,
      message,
    },
  })

  // Refresh the page data
  revalidatePath("/")
}