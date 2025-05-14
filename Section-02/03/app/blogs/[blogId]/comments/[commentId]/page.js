



export default async function CommentsId({params}) {
  const paramsObj= await params;
  const {blogId,commentId}=paramsObj
  // console.log(paramsObj)
  return (
    <>
      <h1>Comments No. <i>{commentId}</i> on <u>{blogId}</u> page</h1>
    </>
  );
}
