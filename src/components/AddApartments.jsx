import { useState } from "react";

function AddApartments (props) {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [host, setHost] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [beds, setBeds] = useState(0);
    const [price, setPrice] = useState(0);

    function handleSubmit(e) {
        
        e.preventDefault();

        const newApartment = {country, city, description, host, propertyType, beds, price};
        console.log(newApartment);
        props.addNewAppartment(newApartment);

        setCountry("");
        setCity("");
        setDescription("");
        setHost("");
        setPropertyType("");
        setBeds("");
        setPrice("");

        console.log(newApartment);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
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
                <input type="text" name="propertytype" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}/>
                <label>
                    Beds
                </label>
                <input type="number" name="beds" value={beds} onChange={(e) => setBeds(e.target.value)}/>
                <label>
                    Price
                </label>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default AddApartments;