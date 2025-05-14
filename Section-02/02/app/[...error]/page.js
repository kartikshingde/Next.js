import Link from "next/link";

export default async function Error({ params }) {
  console.log(await params);
  const { error } = await params;

  return (
    <>
      <h1>
        The Url{" "}
        <i>
          {" "}
          <u>/{error.join("/")}</u>
        </i>{" "}
        seems to be Invalid, Please Go to Home Page then start again.
        <Link href={"/"}>Home</Link>
      </h1>
    </>
  );
}
