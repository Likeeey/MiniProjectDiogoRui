import { useParams } from "react-router-dom";
import Data from '../Data/rentals.json'
import Navbar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Edit from '../components/EditApartment'

function ApartmentsDetails (props) {
    const {apartmentId} = useParams();

    const findApartments = Data.find((apartment) => {
        return apartment.id == apartmentId;
    })

    return (
        <div>
            <Navbar />
            <Footer />
            <Sidebar />
        <section>
            {findApartments ? (<div>
                    <img src={findApartments.picture_url.url} alt="" />
                    <p>Country: {findApartments.country}</p>
                    <p>City: {findApartments.city}</p>
                    <p>Description: {findApartments.description}</p>
                    <p>Host: {findApartments.host_name}</p>
                    <p>Property Type: {findApartments.property_type}</p>
                    <p>Number of Beds: {findApartments.beds}</p>
                    <p>Price: {findApartments.price} $</p>
                </div>) : (<p>Apartment not available</p>)
                }
        <Edit id={apartmentId}/>
        </section>
        
        </div>
    )
}

export default ApartmentsDetails;