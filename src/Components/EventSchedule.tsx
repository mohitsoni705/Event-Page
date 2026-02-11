import event from "../API/Event.json";
export const EventSchedule =()=>{
    return(
        <div className="flex  flex-col gap-4 shadow border w-4xl border-gray-200 p-5">
            <h1 className="text-blue-500 font-bold text-xl" >Event Schedule</h1>
            <table className="border-gray-50">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border-gray-500 border px-4 py-2">Time</th>
                    <th className="border-gray-500 border px-4 py-2">Session</th>
                    <th className="border-gray-500 border px-4 py-2">Contest</th>
                </tr>
                </thead>
                <tbody>
                    {event.events.map((item,index)=>{
                        return(
                        <tr key={index} className={ index % 2=== 0 ? "bg-white" : "bg-gray-100"}>
                            <td className="border border-gray-500 px-4 py-2">{item.time}</td>
                            <td className="border border-gray-500 px-4 py-2">{item.session}</td>
                            <td className="border border-gray-500 px-4 py-2">{item.contest}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}