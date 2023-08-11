import { useState } from "react"
import ResidentCard from "./ResidentCard"

const ResidentList = ({residents}) => {

    const [currentPage, setCurrentPage] = useState(1)

    const RESIDENTS_PER_PAGE = 20;

    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

    const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
    const sliceEnd = sliceStart + RESIDENTS_PER_PAGE

    const residentsInPage = residents.slice(sliceStart, sliceEnd)

    const pages = []

    for(let i = 1; i <= totalPages; i++){
        pages.push[i]
    }

    return (
        <section>
            <section>
            {
                residents.map((resident) => 
                <ResidentCard key={resident} residentUrl={resident}/> )
            }
            </section>

        </section>

    )
}
export default ResidentList