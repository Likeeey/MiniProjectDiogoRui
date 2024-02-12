import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function About () {
    return (
        <div>
            <Navbar />
            <Footer />
            <Sidebar />
        <section>
            <p>This is a project where you can search for apartments and choose which one you like and removed the ones you don't!</p>
            <h5>Made by Diogo Coelho & Rui Marques</h5>
        </section>
        </div>
    )
}

export default About