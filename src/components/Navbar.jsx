import Logo from '../images/LogoApartment.png'

function Navbar () {
    return (
        <nav className="navbar">
            <div>
                <h3>Apartment Rentals Admin</h3>
            </div>
            <div>
                <img src={Logo}/>
            </div>
        </nav>
    )
}

export default Navbar;