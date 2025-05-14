

export const metadata={
    title:"Blog"
}

export default async function Blog({ params }) {
  // console.log(await params)
  const { blogId } = await params;
  return (
    <>
      <h1>Blog:{blogId}</h1>
    </>
  );
}
