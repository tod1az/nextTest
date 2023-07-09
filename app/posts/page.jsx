"use client";
import Link from "next/link";
import { useState } from "react";
import PostList from "../components/PostList/PostList";

const fetchTodos = async (setPosts) => {
  let posts = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  }).then((res) => res.json());
  if (!posts.length) throw new Error("No posts been created");

  return posts;
};

export default async function Posts() {
  let posts = await fetchTodos();

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
