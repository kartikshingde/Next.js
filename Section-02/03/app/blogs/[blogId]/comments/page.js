



export default async function Comments({params}) {
  const paramsObj= await params;
  const {blogId}=paramsObj
  console.log(paramsObj)
  return (
    <>
      <h1>All Comments on <u>{blogId}</u> page</h1>
    </>
  );
}
