const { default: Link } = require("next/link");

export default function ContactUs(){
    return (<>
        <h1>This is contact us page</h1>

        <Link href={"/"}>Home</Link>
    </>)
}