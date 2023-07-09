import { NextResponse } from "next/server";
const endpoint ='https://jsonplaceholder.typicode.com/todos'
export async function GET(){
    const res = await fetch(endpoint).then(res=>res.json())

    return NextResponse.json(res)
}