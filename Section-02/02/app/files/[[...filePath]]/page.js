export default async function FilePath({params}){
        // console.log(await params)
        const {filePath}=await params;

    return(
        <div>
            <h1>File is at: <i>/{filePath?.join("/")}</i></h1>
        </div>
    )
}