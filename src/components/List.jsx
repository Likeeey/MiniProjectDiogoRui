import { useState } from 'react'
import apartList from '../Data/rentals.json'
import { Link } from 'react-router-dom';

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
                            <Link to={`apartments/${apartment.id}`}> <img src={apartment.picture_url.url}/></Link>
                            <p>Name: {apartment.name}</p>
                            <p>Price: {apartment.price}</p>

                            {apartment.price < 60 && 
                                <p>Low Price</p>
                            }
                            {(apartment.price >= 60 && apartment.price < 100)  &&
                                <p>Average Price</p>
                            }
                            {apartment.price >= 100 &&
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