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
        <h2>Apartment List</h2>
        <AddApartment addNewAppartment={addNewAppartment} />
        {apartment.map((apartment) => {
            return <Details key={apartment.id} apartment={apartment} />
        })}
       </div> 
    )
}

export default ApartmentList;