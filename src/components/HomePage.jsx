import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import List from "./List"
import AddApartments from './AddApartments'

function HomePage () {
    return (
        <div>
            <Navbar />
            <AddApartments />
            <Footer />
            <Sidebar />
            <List />
        </div>
    )
}

export default HomePage