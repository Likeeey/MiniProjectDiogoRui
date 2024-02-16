import './App.css'
import {Routes, Route} from "react-router-dom";
import About from './pages/About'
import PageNotFound from './pages/PageNotFound';
import HomePage from './components/HomePage';
import ItemsDetails from './pages/ItemsDetailsPage'

function App() {
  return (
  <div>
    <div>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/apartments/:apartmentId" element={<ItemsDetails/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="*" element = {<PageNotFound/>}/>
      </Routes>
    </div>
  </div>
  )
}

export default App