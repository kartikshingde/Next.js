export default async function Place({ params }) {
//   console.log(await params);
  const { user, place } = await params;
  return (
    <>
      <h1>
        Place of <u>{user}</u> is <i>{place}</i>
      </h1>
    </>
  );
}
