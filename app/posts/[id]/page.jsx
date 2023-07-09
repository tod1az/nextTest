

const fetchTodo =(id)=>{

    return fetch(`http://localhost:3000/api/posts/${id}`).then(res=>res.json())
 }
 
 export default async function Post ({params}){
     const {id} = params
     const post = await fetchTodo(id);
  
     return(
         <div className="px-80 mt-5">
             <h1 className="text-blue-200">{post.title}</h1>
             <h2>{post.body}</h2>
         </div>
     )
 }