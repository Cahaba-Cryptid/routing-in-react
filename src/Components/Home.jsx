import React from "react";
import logo from "../assets/logo.png"

const Home = () => {
    return(
        <section className="row">
            <div className="col-md-12">
                <header>
                <img src={logo} alt="ghibli logo" className="logo rounded mx-auto d-block mt-3" />
                </header>
            </div>
        </section>
    )
}

export default Home;