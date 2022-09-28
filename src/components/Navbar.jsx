import React from "react"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="searching">
                <input className="search-input" id="search-alumn" type="search" placeholder="Escribe un nombre..."/>
                <button className="search-btn" type="submit" htmlFor="search-alumn">Buscar</button>
            </div>
            <div className="right-side">
            <img src="uttimbrado/resources/logo.png" alt="" className="profile-img-admin"/>
            </div>
        </div>
    )
}

export default Navbar