
export default async function User({params}){
    // console.log(await params)
    const {user}=await params
    return(<>
        <h1>You are: {user}</h1>
    </>)
}