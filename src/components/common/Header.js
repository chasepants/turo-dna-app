import React, {useState} from 'react'
import dna from '../../assets/dna.png'

const Header = () => {
    const [show_about, setShowAbout] = useState(false)

    const toggleAbout = () => {
        setShowAbout(!show_about)
    }

    let about_classes = show_about ? "collapse bg-dark show" : "collapse bg-dark"

    return (
        <header>
            <div className={about_classes} id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">Like AirDna but TuroDna. TuroDna could give insight to investors when determining whether or not to become a turo host.</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Contact</h4>
                            <ul className="list-unstyled">
                                <li><a href="turo.com" className="text-white">Turo</a></li>
                                <li><a href="github.com" className="text-white">Github</a></li>
                                <li><a href="chase.parks94@gmail.com" className="text-white">Email me</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-light bg shadow-sm">
                <div className="container">
                    <div className="navbar-brand d-flex align-items-center">
                        <strong>Turo</strong>
                        <img className="mr-3" height="25" width="25" src={dna}/>
                    </div>
                    <button className="navbar-toggler" type="button" onClick={toggleAbout}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header 