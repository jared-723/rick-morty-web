const LocationForm = ({handleSubmit}) => {
    return (
        <section className="w-[80%] flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className='w-[200px] md:w-[300px]'>
                <img src="/imgSrc/titleRickMorty.png" alt="" />
            </div>
            <form onSubmit={handleSubmit} className="pl-4 pr-4 relative">
                <input 
                min={1} 
                max={126 }
                id="newLocation" 
                type="number" 
                placeholder="Type a location id..." 
                className="w-[300px] h-[50px] p-4 rounded-full outline-none text-[var(--principalColor)] 
                border-solid border-[var(--principalColor)] border-4 font-bold md:w-[400px] lg:w-[500px]"/>
                <button className="w-[138px] h-[50px] bg-[var(--bgButton)] border-solid border-[var(--principalColor)] border-4
                rounded-full absolute right-4 bottom-0 text-[var(--principalColor)] font-bold">Search</button>
            </form>
        </section>
        
    )
}
export default LocationForm