import Link from "next/link";
import PostList from "../components/PostList/PostList";
import { GET as getPosts } from "../api/posts/route";
import { GET as getTodos } from "../api/todos/route";

const fetchTodos = async () => {
  let posts = await getPosts().then((posts) => posts.json());
  let todos = await getTodos().then((todos) => todos.json());
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
