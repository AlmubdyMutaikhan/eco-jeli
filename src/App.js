import './App.css';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
