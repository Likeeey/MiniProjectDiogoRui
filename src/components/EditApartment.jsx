import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const url = "http://localhost:5173";


function EditApartment (props) {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [host, setHost] = useState("");
    const [propertyType, setPropertyType] = useState("")
    const [beds, setBeds] = useState(0);
    const [price, setPrice] = useState(0);

    const {id} = props;

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${url}/apartments/${id}`)
        .then((response) => {
            setCountry(response.data.country);
            setCity(response.data.city);
            setDescription(response.data.description);
            setHost(response.data.host);
            setPropertyType(response.data.propertyType);
            setBeds(response.data.beds);
            setPrice(response.data.price);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    function handleEdit(e) {
        e.preventDefault();

        const data = {country, city, description, host, propertyType, beds, price}
        console.log(data)

        axios.put(`${url}/apartments/${id}`, data)
        .then(() => {
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <section>
            <form onSubmit={handleEdit}>
                <label>
                    Country
                </label>
                <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                <label>
                    City
                </label>
                <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                <label>
                    Description
                </label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <label>
                    Host
                </label>
                <input type="text" name="host" value={host} onChange={(e) => setHost(e.target.value)}/>
                <label>
                    Property Type
                </label>
                <input type="text" name="propertyType" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}/>
                <label>
                    Beds
                </label>
                <input type="number" name="beds" value={beds} onChange={(e) => setBeds(e.target.value)}/>
                <label>
                    Price
                </label>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>

                <button type="submit">Edit Apartment</button>
            </form>
        </section>
    )
}

export default EditApartment;