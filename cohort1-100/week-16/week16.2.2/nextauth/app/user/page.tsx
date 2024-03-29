import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";

export default async function User(){
    const session = await getServerSession(NEXT_AUTH);
    return <div>
        <h1 className="text-3xl">Server component </h1><br />
        <p>and we know server component can be used for apis </p><br />
        {JSON.stringify(session)}
    </div>
}