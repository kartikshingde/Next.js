import Link from "next/link";

export default function Services(){

    return (<>
            <h1>Services Provided are: </h1>
            <ol>
                <li><Link href={"/services/web-dev"}>Web development</Link></li>
                <li>App development</li>
                <li>Blockchain development</li>
            </ol>
            <Link href={"/"}>Home</Link>
        </>)

}