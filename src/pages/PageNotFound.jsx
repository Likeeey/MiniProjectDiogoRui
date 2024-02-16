import { Link } from "react-router-dom";

function PageNotFound () {
    return (
        <section>
            <p>Oops... Page not found.</p>
            <Link to='/'>Go to Home Page</Link>
        </section>
    )
}

export default PageNotFound;