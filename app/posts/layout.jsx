import Link from "next/link";

export default function layout ({children}){
    return(
        <div>
            <Link className="mb-11 " href={'/posts'}>
                Posts
            </Link>
            {children}
        </div>
    )

}