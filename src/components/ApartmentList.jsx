import {useState} from 'react'
import apartmentData from '../Data/rentals.json'
import AddApartment from '../components/AddApartments'
import Details from '../Pages/ItensDetailsPlan'

function ApartmentList() {
    const [apartment, setApartment] = useState(apartmentData);

    function addNewAppartment(newApartment) {
        const updatedApartments = [...apartment, newApartment];
        setApartment(updatedApartments);
    }

    return (
       <div>
        <h2>Add Apartment</h2>
        <AddApartment addNewAppartment={addNewAppartment} />
       </div> 
    )
}

export default ApartmentList;