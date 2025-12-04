"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { User, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserProfile() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return (
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
        )
    }

    if (!session) {
        return (
            <div className="flex items-center gap-2">
                <Link href="/admin/login">
                    <Button variant="ghost" size="sm">
                        Iniciar Sesión
                    </Button>
                </Link>
            </div>
        )
    }

    const initials = session.user.name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase() || "U"

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={session.user.image || ""} alt={session.user.name || ""} />
                        <AvatarFallback className="bg-accent-gold text-primary-black">
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{session.user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {session.user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {session.user.role === "ADMIN" && (
                    <>
                        <DropdownMenuItem asChild>
                            <Link href="/admin" className="cursor-pointer">
                                <Settings className="mr-2 h-4 w-4" />
                                Panel Admin
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </>
                )}
                <DropdownMenuItem
                    className="cursor-pointer text-red-600"
                    onClick={() => signOut({ callbackUrl: "/" })}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar Sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}