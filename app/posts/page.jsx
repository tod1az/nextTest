"use client";
import Link from "next/link";
import PostList from "../components/PostList/PostList";

export default async function Posts() {
  let data = await fetch("/api/posts");
  let posts = await data.json();
  return (
    <div>
      <PostList show={posts} />
      <Link
        href={"/posts/create"}
        className="bg-black text-blue-200 rounded-2xl p-3  border-2 border-white
             hover:bg-gray-400 hover:text-red-200 hover:scale-110"
      >
        New Post
      </Link>
    </div>
  );
}
