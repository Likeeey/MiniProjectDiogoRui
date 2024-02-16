import Form from '../components/FormApartment'
import { useState } from 'react';
import ApartmentList from './ApartmentList';
import Data from '../Data/rentals.json'
import Navbar from './NavBar';
import Sidebar from './Sidebar';
import Footer from './Footer';

function HomePage () {
  
    const [apartment, setApartment] = useState(Data);

    function addNewApartment(newApartment) {
        const updatedApartments = [...apartment, newApartment];
        setApartment(updatedApartments);
    }

    function DeleteList (apartmentid) {

        let filterList = apartment.filter((aparts) => {
            return (
                aparts.id !== apartmentid
            )
        })
        setApartment(filterList) 
    }

    return (
        <div>
            <Navbar />
            <Sidebar />
            <Footer />
        <section>
            <h2>Add Apartment</h2>
            <Form addNewApartment={addNewApartment}/>
            <ApartmentList DeleteList={DeleteList} apartment={apartment}/>
        </section>
        </div>
    )
}


export default HomePage;