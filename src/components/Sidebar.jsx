import { Link } from "react-router-dom";

function Sidebar () {
    return (
        <aside className="sidebar">
            <div>
                <Link to ="/"><p>Home</p></Link>
            </div>
            <div>
                <Link to ="/about"><p>About</p></Link>
            </div>
        </aside>
    )
}

export default Sidebar;