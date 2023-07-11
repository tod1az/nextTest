const fetchTodos = () => {
  return fetch("http://localhost:3000/api/todos").then((res) => res.json());
};

export default async function TodoList() {
  const todos = await fetchTodos();
  return (
    <ul className="px-80">
      {todos.map(({ id, title, completed }) => (
        <div key={title}>
          <p className=" ml-10 p-1 text-justify  " key={id}>
            {id}. {title} {completed ? "✅" : "❌"}
          </p>
        </div>
      ))}
    </ul>
  );
}
