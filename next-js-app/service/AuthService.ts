import axios from "axios";

export const authenticate = async (email: string, password: string) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/authenticate`,
        { email: email, password: password },
        { withCredentials: true } // This ensures the HTTP-only cookie is stored
    );
}

export const registerUser = (FormData: RegForm) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`,
        FormData,
        { withCredentials: true }
    )
}

export const logout = async () => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/remove-cookie`,
            { withCredentials: true }
        );
        if (response.status === 200) {
            return
        } else {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            return
        }
    }
    catch {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        return
    }
}
