'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"

export default function Subscribe() {
    const [email, setEmail] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const user_email = await fetch("/api/email", {
            method: "POST",
            body: JSON.stringify({email}),
        })

        return user_email;
    }

    return (
        <div>
            <div id="form1" className="flex w-full max-w-sm space-x-2">
                <Input id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <Button type="submit" onClick={handleSubmit}>Subscribe</Button>
            </div>
        </div>
    )
}