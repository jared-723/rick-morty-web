export const Pagination = ({pages, setCurrentPage, currentPage}) => {
    console.log(pages)
    return (
        <ul className="flex flex-wrap justify-center gap-2 pb-4">
            {pages.map((page)=> (
                <li className=
                {` grid place-content-center ${currentPage === page && "text-[var(--principalColor)]"} 
                w-[50px] h-[50px] bg-[var(--bgName)] rounded-full text-[20px] font-bold border-solid border-[var(--principalColor)] border-4`}
                onClick={() => setCurrentPage(page)} key={page}>
                    {page}
                </li>
            ))}
        </ul>
    )
}
