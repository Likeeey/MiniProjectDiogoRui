import './App.css'
import List from './components/List'
import {Routes, Route} from "react-router-dom";
import DashBoard from './Pages/DashBoardPage';
import HomePage from './components/HomePage';
import ApartmentsDetails from './Pages/ItensDetailsPlan';
import apartList from './Data/rentals.json'



function App() {
  return (
  <div>
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/apartments/:apartmentId' element={<ApartmentsDetails/>/*  apartments = {apartList} */} />
      </Routes>
    </div>
  </div>
  )
}

export default App