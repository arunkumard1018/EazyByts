'use client'
import { fetchMe } from "@/service/data/UserData";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react"


export const useAuth = () => useContext(AuthContext)
interface User {
    id: string | number;
    name: string;
    email: string;
}
interface UserContextType {
    user: User | null;
}

export const AuthContext = createContext<UserContextType | undefined>(undefined);



export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log("Fetching User")
                const user = await fetchMe()
                if (user) {
                    setUser(user);
                }
            } catch (error) {
                setUser(null)
            }
        };

        fetchUser();
    }, []);

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>

} 