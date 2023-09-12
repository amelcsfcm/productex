import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Productbyid from './pages/Productbyid';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/product/:id" element={<Productbyid/>}/>


      

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
