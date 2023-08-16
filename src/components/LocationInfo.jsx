const LocationInfo = ({currentLocation}) => {
    return (
        <section className="grid place-content-center px-8 py-4 rounded-xl
        bg-[var(--bgName)] text-[var(--principalColor)]
        border-solid border-[var(--principalColor)] border-4">
            <h2 className="justify-self-center">{currentLocation?.name}</h2>
            <ul className="justify-between">
                <li>Type: {currentLocation?.type}</li>
                <li>Dimension:{currentLocation?.dimension}</li>
                <li>Population:{currentLocation?.residents.length}</li>
            </ul>
        </section>
    )
}
export default LocationInfo