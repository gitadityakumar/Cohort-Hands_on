import { useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const Signin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-2xl font-bold mb-8">SignIn</div>
            <input 
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
                onChange={(e) => setUsername(e.target.value)}
                type="text" 
                placeholder="Username" 
            />
            <input 
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder="Password" 
            />
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={async () => {
                    await axios.post(`${BACKEND_URL}/signin`, {
                        username,
                        password
                    }, {
                        withCredentials: true,
                    });
                    alert("You are logged in");
                }}
            >
                Submit
            </button>
        </div>
    );
}
