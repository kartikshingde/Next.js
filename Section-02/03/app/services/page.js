import Link from "next/link";

export const metadata={
    title:"Services"
}

export default function Services() {
  return (
    <>
      <h1>Services Provided are: </h1>
      <ol>
        <li>
          <Link href={"/services/web-dev"}>Web development</Link>
        </li>
        <li>App development</li>
        <li>
          <Link href={"/services/seo"}>SEO</Link>
        </li>
      </ol>
      <Link href={"/"}>Home</Link>
    </>
  );
}
