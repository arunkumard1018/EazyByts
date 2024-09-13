import axios from "axios";

export const fetchMe = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/me`,
            { withCredentials: true }
        );
        if (response.status === 200) {
            return (response.data)
        } else {
            console.error('failed to fetch you');
            return null;
        }
    } catch (error) {
        console.error('Error during fetching me:', error);
    }
}

