import { NextResponse } from "next/server";
import prisma from '../prismaclient/client'

export async function GET(){
    let res = await prisma.Post.findMany()
    res = res.sort((a,b)=>a.id-b.id)
    if(!res.length){
        return NextResponse.json({message:'no post has been created yet'},{status:404})
    }

    return NextResponse.json(res)

}


export async function POST(request){
    const {title,body,email} = await request.json();
    const foundEmail = await prisma.email.findFirst({
        where:{email:email}
    })
    const post = await prisma.Post.create({
       data:{
        title:title,
        body:body,
        email:{
            connect:{id:foundEmail.id}
        }
    }
    })      
    return NextResponse.json(post)
}