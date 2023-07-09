import Link from "next/link";


const Links =[
    {
        name:'Home',
        route:'/'
    },
    {
        name:'About',
        route:'/about'
    },
    {
        name:'Counter',
        route:'/counter'
    },
    {
        name:'To Do',
        route:'/todos'
    },
    {
        name:'Cells',
        route:'/cells'
    },
    {
        name:'Posts',
        route:'/posts'
    }      
]



const  NavBar= ()=>{
    return(
        <div className="p-2 border-2 rounded-2xl mb-5 hover:bg-slate-900">
            {Links.map((link)=>(
                <Link key={link.route}  href={link.route}
                className="p-5 hover:underline hover:text-fuchsia-800"
                >{link.name}</Link>
            ))}
        </div>
    )
}
export default NavBar;