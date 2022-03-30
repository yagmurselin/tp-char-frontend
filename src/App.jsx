import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";

function App() {
  return (
      <Router>
        <div className="backgroundColor">
          <Navbar/>

          <Routes>
          <Route path="/" element={<Home/>}></Route>
          </Routes>
          
        </div>
      </Router> 
  );
}

export default App;
