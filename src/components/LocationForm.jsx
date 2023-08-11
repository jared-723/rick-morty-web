const LocationForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input min={1} max={126 }
            type="number" placeholder="Type a location id..."/>
            <button id="newLocation">Search</button>
        </form>
    )
}
export default LocationForm