import { useParams } from "react-router-dom";
import apartments from '../Data/rentals.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';


function ApartmentsDetails () {
    const {apartmentId} = useParams();
/*     const {apartments} = props; */

    const foundApartments = apartments.find((apartment) => {
        return apartment.id == apartmentId;
    }) 

    return (
        <div>
            <Navbar />
            <Footer />
            <Sidebar />
        <section>
            {
                foundApartments ? (<div>
                    <p>Country: {foundApartments.country}</p>
                    <p>City: {foundApartments.city}</p>
                    <p>Country: {foundApartments.country}</p>
                    <p>Description: {foundApartments.description}</p>
                    <p>Host: {foundApartments.host_name}</p>
                    <p>Property Type: {foundApartments.property_type}</p>
                    <p>Number of Beds: {foundApartments.beds}</p>
                    <p>Price: {foundApartments.price} $</p>
                </div>) : (<p>Apartment not available</p>)
                
            }
        </section>
        </div>
    );
}

export default ApartmentsDetails;