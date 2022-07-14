import './App.css';
import Events from './components/Events/Events';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Events/>
    </div>
  );
}

export default App;
