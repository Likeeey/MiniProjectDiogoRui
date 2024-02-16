import { useState } from "react"

function FormApartments (props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);


    function handleSubmit(e) {
        
        e.preventDefault();

        const newApartment = {name, price};
        props.addNewApartment(newApartment);

        setName("");
        setPrice(0);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                </label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>
                    Price
                </label>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default FormApartments;