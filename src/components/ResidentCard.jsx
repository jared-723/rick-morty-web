import axios from "axios"
import { useState } from "react"

const ResidentCard = ({residentUrl}) => {
    const [resident, setResident] = useState(null)

    const residentStatus = {
        "Alive": "bg-green-500",
        "Dead": "bg-red-500",
        "Unknown": "bg-slate-500"
    }

    axios
        .get(residentUrl)
        .then(({data}) => setResident(data))
        .catch((err) => console.log(err))

    return (
    <article>
        <header>
            <img src={resident?.image} alt="" />
            <div className="flex items-center gap-2 p-2">
                <div className={`h-[10px] aspect-square rounded-full ${residentStatus[resident?.status]}`}></div>
                {resident?.status}
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <ul>
                <li>Species:{resident?.species}</li>
                <li>Origin:{resident?.origin.name}</li>
                <li>Times appear: {resident?.episode.length}</li>
            </ul>
        </section>
    </article>
    )
}
export default ResidentCard