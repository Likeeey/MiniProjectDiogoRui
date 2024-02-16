import { useState } from "react"
import Data from '../Data/rentals.json'
import { Link } from "react-router-dom"

function ApartmentList (props) {
    const [apartsList, setApartsList] = useState(Data)

    const {apartment, DeleteList} = props;


    return (
    <div>
        <div>
        {apartment.map((apartment) => {
            return (
                <div key={apartment.id}>
                    <img style={{width: "100px"}}src={apartment.picture_url}/>
                    <Link to={`apartments/${apartment.id}`}><p>Name: {apartment.name}</p></Link>
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

                    <button onClick={() => DeleteList(apartment.id)}>Delete</button>
                </div>
            )
        })}
    </div>
</div>
)
}

export default ApartmentList;