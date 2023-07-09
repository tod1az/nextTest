"use client";
import { useState } from "react";
import Link from "next/link";

const PostList = ({ show }) => {
  const [posts, setPosts] = useState(show);
  const [auxPosts, setAuxPosts] = useState(posts);
  const [order, setOrder] = useState("default");

  const AZ = () => {
    setPosts(posts.sort((a, b) => a.title.localeCompare(b.title)));
    setOrder("az");
    console.log(posts);
  };
  const ZA = () => {
    setPosts(posts.sort((a, b) => b.title.localeCompare(a.title)));
    setOrder("za");
    console.log(posts);
  };
  const StartWith = (e) => {
    e.target.value === ""
      ? setPosts(auxPosts)
      : setPosts(posts.filter((post) => post.title.includes(e.target.value)));
  };
  return (
    <div>
      <input className=" bg-black" onChange={StartWith} />
      <button
        onClick={AZ}
        className="bg-black text-blue-200 rounded-2xl p-1 border-2 border-white
             hover:bg-gray-400 hover:text-red-200 hover:scale-110"
      >
        A-Z
      </button>
      <button
        onClick={ZA}
        className="bg-black text-blue-200 rounded-2xl p-1  border-2 border-white
             hover:bg-gray-400 hover:text-red-200 hover:scale-110"
      >
        Z-A
      </button>
      <ul className="px-80">
        {posts.map(({ id, title }) => (
          <Link key={title} href={`/posts/${id}`}>
            <p className="hover:text-red-200  text-blue-200 ml-10 p-1 text-justify my-5" key={id}>
              ⭕ {title}
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
