"use client"
import Image from 'next/image';
import logo from "./logo.png"
// import { useRouter } from 'next/navigation';
import { signIn, signOut,useSession } from "next-auth/react"




export const Appbar = () => {
    // const router = useRouter();
    const session = useSession();
    return (
    <>
     <div className="w-full bg-blue-500  p-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex-initial">
                    <Image
                        src={logo}
                        width={50}
                        height={50}
                        alt="Aditya kumar"
                    /> {/* Replace 'logo.png' with your logo image */}
                </div>
                <div className="flex-auto text-center">
                    <h1 className="text-white text-xl font-bold">Home Page</h1> {/* Replace 'App Title' with your app title */}
                </div>
                <div className="flex-initial space-x-1">
                    <button className="bg-white text-blue-500 px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
                    onClick={()=>{
                      signIn()
                    }}
                    >Login
                    </button>
                    <button className="bg-white text-blue-500 px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
                    onClick={()=>signOut()}
                    
                    >Logout</button> {/* Example action button */}
                </div>
            </div>
            
        </div>
        <div>
            {JSON.stringify(session)}
        </div>
        
    </>  
    );
}





