import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainHeader from "./Common/MainHeader.tsx";
import MainNav from "./Common/MainNav.tsx";
import MainFooter from "./Common/MainFooter.tsx";
import Home from './Pages/Home.tsx';
function App() {

  return (
    <BrowserRouter>
     <MainHeader/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
     <MainFooter/>
    </BrowserRouter>
  )
}

export default App
