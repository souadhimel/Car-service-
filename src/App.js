
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';
import Experts from './Pages/Home/Experts/Experts';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/services" element={<Services></Services>}></Route>
<Route path="/about" element={<About></About>}></Route>
<Route path="/experts" element={<Experts></Experts>}></Route>


<Route path="*" element={<NotFound></NotFound>}></Route>



      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
