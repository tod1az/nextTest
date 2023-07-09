'use client'
import Link from "next/link"
export default function Error (){
    return(
        <div>
            <h1 className="mb-10">No post has been created yet 😢</h1>
            <Link href={'/posts/create'}  className="bg-black  text-blue-200 rounded-2xl p-3  border-2 border-white
            hover:bg-gray-400 hover:text-red-200 hover:scale-110">
                New Post
            </Link>   
        </div>
    )
}