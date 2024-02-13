import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import List from "./List"
/* import AddApartments from './AddApartments' */
import ApartmentList from './ApartmentList'

function HomePage () {
    return (
        <div>
            <Navbar />
            <ApartmentList />
            <Footer />
            <Sidebar />
            {/* <List /> */}
        </div>
    )
}

export default HomePage