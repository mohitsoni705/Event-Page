interface AboutProps {
    text:string
}
export const About=({text}:AboutProps)=>{
    return(
        <div className="flex flex-col p-8 gap-4 w-4xl border rounded-lg shadow border-gray-200">
            <h1 className="text-blue-500 font-semibold text-2xl">About The Event</h1>
            <p className="text-sm">{text}</p>
        </div>
    )
}