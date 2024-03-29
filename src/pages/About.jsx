import Navbar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

function AboutPage () {
    return (
        <div className='navbarabout'>
            <Navbar />
        <div>
            <Sidebar />
            <Footer />
        <section>
            <p>This is a project where you can search for apartments and choose which one you like and removed the ones you don't!</p>
            <h4>Made by Diogo Coelho & Rui Marques</h4>
            <h5>Diogo Coelho<a href='https://www.linkedin.com/in/diogo-coelho-9360a9268/'> LinkedIn</a><a href='https://github.com/DiogoCoelho98'> GitHub</a></h5>
            <h5>Rui Marques<a href='https://www.linkedin.com/in/rui-marques-873667163/'> LinkedIn</a><a href='https://github.com/Likeeey'> GitHub</a></h5>
        </section>
        </div>
        </div>
    )
}

export default AboutPage