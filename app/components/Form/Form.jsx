"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPost() {
  const router = useRouter();

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const postHandler = async () => {
    const res = await fetch(`http://localhost:3000/api/posts`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());
    if (res?.title) {
      alert(`Se agrego el post ${res.title}`);
      router.push("/posts");
    } else alert("algo paso esta mal");
  };

  const [post, setPost] = useState({ title: "", body: "", email: "t.diaz.soto@gmail.com" });

  const submitHandler = (e) => {
    e.preventDefault();
    postHandler();
  };

  return (
    <div className=" flex-col flex justify-center items-center mt-5">
      <h1>New Post!</h1>
      <form
        onSubmit={submitHandler}
        className="grid border-2 justify-center rounded-2xl  m-5 w-72  mr-0"
      >
        <label htmlFor="title" className="m-5 ">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={changeHandler}
          className="bg-black text-blue-200 rounded-2xl p-3  border-2 border-white "
        />

        <label htmlFor="body" className="m-5 ">
          Content
        </label>
        <textarea
          type="text"
          name="body"
          value={post.body}
          onChange={changeHandler}
          className="bg-black text-blue-200 rounded-2xl p-3  border-2 border-white "
        />

        <button
          className="bg-black text-blue-200 rounded-2xl p-3  border-2 border-white
                        hover:bg-gray-400 hover:text-red-200 m-8"
        >
          Add post
        </button>
      </form>
    </div>
  );
}
