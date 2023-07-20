import FlightMapContainer from "@isaacjacques/flight-tracker";

export default function FlightMapDemo() {
    return(
    <div className="flex flex-col gap-4">
        <h1 className="font-bold text-5xl text-isabelline-100">Flight Tracker</h1>
        <section id="demo">
            <FlightMapContainer />
        </section>
        <section id="about">
            <div className="text-lg text-paledogwood-300">
                <h2 className="text-4xl font-bold leading-snug text-isabelline-100">About</h2>
                    <p className="mb-8">
                        Inspired by <a href="https://www.flightradar24.com/" target="_blank" className="underline">flightradar24</a>, I created a react app that visualizes publicly available flight data.
                        The app fetches data from the <a href="https://openskynetwork.github.io/opensky-api/rest.html" target="_blank" className="underline">OpenSky REST API</a> using axios.
                        It then plots relevant flight data on a leaflet map component using leaflet markers.
                        Each flight icon can be selected to show a popup with additional information about the flight.
                        For more information about how it works, check out the ReadMe on GitHub.
                    </p>
                    <p className="mb-8">
                        Note that this app uses an anonymous account for the OpenSky API which limits each client to 100 calls per day.
                        This means after enough time, youll stop seeing live flight data on the map.
                    </p>
            </div>
        </section>
        <section id="sourcecode">
            <div className="text-lg text-paledogwood-300">
                <h2 className="text-4xl font-bold leading-snug text-isabelline-100">SourceCode</h2>
                <a href="https://github.com/isaacjacques/flight-tracker" target="_blank" className="underline">
                    Github Repo
                </a>
            </div>
        </section>
    </div>
);
}