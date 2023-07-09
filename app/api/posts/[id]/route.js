import { NextResponse } from "next/server";
import prisma from "../../prismaclient/client";



export async function GET(request,{params}){
    const {id} = params
    const res  = await prisma.Post.findUnique({
        where:{
            id:Number(id)
        },
        include:{
            email:true
        }
    })
    if(!res){
        return NextResponse.json({message:`Post ${id} not found`},{status:404})
    }

    return NextResponse.json(res)
}

export async function PUT(request,{params}){
    const {id} = params
    const {newTitle,newBody} = await request.json();
     await prisma.Post.update({
        where:{
            id:Number(id)
        },
        data:{
            title:newTitle,
            body:newBody
        },
    })
  
    const res = {id,newTitle,newBody}
    return NextResponse.json(res)
}

export async function DELETE(request,{params}){
    const {id} = params
    await prisma.Post.delete({
        where:{
            id:Number(id)
        }
    })
    return NextResponse.json({message:`id:${id} has been deleted`})
}






