import axios from "axios"
import { useState } from "react"

const ResidentCard = ({residentUrl}) => {
    const [resident, setResident] = useState(null)
    const [isStatus, setIsStatus] = useState(false)

    const residentStatus = {
        "Alive": "bg-green-500 bg-opacity-40",
        "Dead": "bg-red-500 bg-opacity-40",
        "unknown": "bg-zinc-600 bg-opacity-70"
    }

    const handleShowStatus = () => {
        setIsStatus(!isStatus)
    }

    axios
        .get(residentUrl)
        .then(({data}) => setResident(data))
        .catch((err) => console.log(err))

    return (
    <article className="flex flex-col items-center basis-[400px]">
        <header className="w-[150px] border-solid border-[var(--principalColor)] border-8 relative rounded-full overflow-hidden sm:w-[200px]" >
            <img src={resident?.image} alt="" />
            <div className={`absolute h-[150px] w-[150px] top-0 ${residentStatus[resident?.status]} 
            grid place-content-center text-[10px] ${isStatus ? "visible" : "invisible"} sm:w-[200px] sm:h-[200px]`}>
                <span className="font-bold text-white bg-slate-700 bg-opacity-50 rounded-full p-1 px-3 text-[20px] sm:text-[15px] ">{resident?.status}</span>
            </div>
        </header>
        <section className="w-full bg-[var(--bgPrincipalCard)] rounded-3xl border-solid border-[var(--principalColor)] border-8 relative text-white">
            <h3 className="bg-[var(--bgName)] py-4 rounded-2xl text-center font-bold text-[20px] text-[var(--principalColor)] rounded-bl-none">{resident?.name}</h3>
                <ul className="bg-[var(--bgSubCard)] pr-[1rem] w-[97%] rounded-br-[4rem] grid place-items-center py-4 px-2 gap-4">
                    <li><span className="text-[var(--principalColor)]">Species</span> {resident?.species}</li>
                    <li><span className="text-[var(--principalColor)]">Origin</span> {resident?.origin.name}</li>
                    <li><span className="text-[var(--principalColor)]">Times appear</span> {resident?.episode.length}</li>
                        <button className="w-auto top-0 border-solid border-[var(--principalColor)] 
                        border-4 rounded-xl px-4 py-2 bg-[var(--bgName)] text-[var(--principalColor)] font-bold" 
                        onClick={handleShowStatus}>
                            Show Status
                        </button>
                </ul>

        </section>
    </article>
    )
}
export default ResidentCard