export default async function page1({params}) {
  // console.log(await params)
  const {blog}=await params
  return <>
    <h1>Blog :{blog}</h1>
  </>;
}
