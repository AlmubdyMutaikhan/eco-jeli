import './App.css';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Article from './components/Article/Article';
import AllEvents from './components/AllEvents/AllEvents';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/blog/:blogID' element={<Article/>}/>
          <Route path='/events' element={<AllEvents/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
