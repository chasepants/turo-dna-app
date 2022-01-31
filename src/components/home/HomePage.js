import React, {useState} from 'react'
import axios from 'axios'

function HomePage(){
    const TURO_SERVER_URL = process.env.TURO_SERVER_URL;
    let [rate, setRate] = useState("")
    let [make, setMake] = useState("")
    let [city, setCity] = useState("")
    let [model, setModel] = useState("")
    let [state, setState] = useState("")
    let [revenue, setRevenue] = useState("")
    let [occupancy, setOccupancy] = useState("")

    const search = async () => {
        try {
            const response = await axios.get(`${TURO_SERVER_URL}/stats/${city}/${state}`);
            console.log(response.data)
            setRevenue(response.data.revenue)
            setRate(response.data.rate)
            setOccupancy(response.data.occupancy)
        } catch (error) {
            console.error(`ERROR: ${error}`);
        }
    }

    return (
        <div>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Turo DNA</h1>
                        <p className="lead text-muted"></p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="City" aria-label="city" onChange={e => setCity(e.target.value)}/>
                            <input type="text" className="form-control" placeholder="State" aria-label="state" onChange={e => setState(e.target.value)}/>
                            {/* <input type="text" className="form-control" placeholder="Make" aria-label="make" onChange={e => setMake(e.target.value)}/>
                            <input type="text" className="form-control" placeholder="Model" aria-label="model" onChange={e => setModel(e.target.value)}/> */}

                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="button" onClick={()=>{search()}}>Search</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Revenue" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Revenue</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

                                <div className="card-body">
                                    <p className="card-text">Average Monthly Revenue: ${revenue}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View More</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Download</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rate" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Rate</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

                                <div className="card-body">
                                    <p className="card-text">Average Daily Rate: ${rate}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View More</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Download</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Occupancy" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Occupancy</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

                                    <div className="card-body">
                                        <p className="card-text">Average Monthly Occupancy: ${occupancy}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View More</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Download</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="text-muted py-5">
            <div className="container">
            <p className="float-end mb-1">
                <a href="#">Back to top</a>
            </p>
            <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p>
            </div>
            </footer>
        </div>
    )
}

export default HomePage