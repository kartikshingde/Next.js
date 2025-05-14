import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to my Next App</h1>

      <p>
        <Link href={"/blogs"}>View Blogs</Link>
      </p>

      <p>
        <Link href={"/services"}>Services </Link>
      </p>
      <p>
        <Link href="/contactus">Contact Us </Link>
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/users">User</Link>
      </p>
    </>
  );
}
