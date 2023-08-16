const LocationForm = ({handleSubmit}) => {
    return (
        <section>
            <div className='w-[200px]'>
                <img src="/imgSrc/titleRickMorty.png" alt="" />
            </div>
            <form onSubmit={handleSubmit} className="mx-[auto] pl-4 pr-4 relative">
                <input 
                min={1} 
                max={126 }
                id="newLocation" 
                type="number" 
                placeholder="Type a location id..." 
                className="w-[300px] h-[50px] p-4 rounded-full outline-none text-[var(--principalColor)] border-solid border-[var(--principalColor)] border-4 font-bold"/>
                <button className="w-[138px] h-[50px] bg-[var(--bgButton)] border-solid border-[var(--principalColor)] border-4
                rounded-full absolute right-4 bottom-0 text-[var(--principalColor)] font-bold">Search</button>
            </form>
        </section>
        
    )
}
export default LocationForm