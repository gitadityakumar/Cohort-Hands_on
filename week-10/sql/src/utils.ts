import { Client } from "pg";

export async function getclient() {
    const connectionString = "postgres://snghlffr:gNoiN9_iPTa-u-DnxiXhHYWtPoh7-mcM@jelani.db.elephantsql.com/snghlffr";

    try {
        const client = new Client(connectionString);
        await client.connect();
        console.log("Connected to the database");
        return client;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; // Rethrow the error to propagate it to the caller
    }
}
