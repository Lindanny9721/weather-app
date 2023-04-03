import './App.css'
import Dashboard from './components/Dashboard'
import DayDetail from './components/DayDetail';
import Navbar from './components/NavBar'
import Search from './components/Search';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <nav>
        <div className="App">
          <Navbar/>
            <Routes>
              <Route excat path="/" element={<Dashboard />}/>
              <Route path="/search" element={<Search/> }/>
              <Route path="/daydetail" element={<DayDetail/>} />
              <Route path="/day/:city/:date" element={<DayDetail/>} />
            </Routes>
        </div>
      </nav>
  )
}

export default App
