import './App.css';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MyClub from './components/MyClub/MyClub';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/myclub' element={<MyClub/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
