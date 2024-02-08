import { useState } from 'react'
import apartList from '../Data/rentals.json'

function DisplayAparts () {
    const [aparts, setAparts] = useState(apartList);

        function deleteList (apartmentid) {
            let filterList = aparts.filter((apart) => {
                return (
                    apart.id !== apartmentid
                )
            })
            setAparts(filterList);
        }


    return (
        <div>
            <div>
                {aparts.map((apartment) => {
                    return (
                        <div key={apartment.id}>
                            <img src={apartment.picture_url.url}/>
                            <p>Beds: {apartment.beds}</p>
                            <p>Bedrooms: {apartment.bedrooms}</p>
                            <p>Country: {apartment.country}</p>
                            <p>City: {apartment.city}</p>
                            <p>Price: {apartment.price}€</p>
                            {apartment.price <= 60 && 
                                <p>Low Price</p>
                            }
                            {apartment.price <= 90 &&
                                <p>Average Price</p>
                            }
                            {apartment.price > 90 &&
                                <p>Premium Price</p>
                            }

                            <button onClick={() => deleteList(apartment.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DisplayAparts