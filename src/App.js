import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Add from './components/Add';
import Search from './components/Search';
import Deleted from './components/Deleted';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>

<Route path="/" element={<HomePage/>}/>
<Route path="/add" element={<Add/>}/>
<Route path="/search" element={<Search/>}/>
<Route path="/deleted" element={<Deleted/>}/>
<Route path="/view" element={<View/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
