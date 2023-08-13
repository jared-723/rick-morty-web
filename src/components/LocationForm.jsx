const LocationForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} >
            <input 
            min={1} 
            max={126 }
            id="newLocation" 
            type="number" 
            placeholder="Type a location id..."/>
            <button >Search</button>
        </form>
    )
}
export default LocationForm