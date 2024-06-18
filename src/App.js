import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Events from './components/Events';
import Recent from './components/Recent';
import Events1 from './components/Events1';
// import Featureus from './components/Featureus';
import Priceus from './components/Priceus';
import Teamus from './components/Teamus';
import Frontpage from './components/Frontpage';
import Bloggrid from './components/Bloggrid';
import Xecom from './components/Xecom';
import Xecom1 from './components/Xecom1';
import Detail from './components/Detail';
import Chakravyuh from './components/Chakravyuh';
import Contactus from './components/Contactus';
import Ieeextreme from './components/Ieeextreme';
import Faculty from './components/Faculty';
import CodeQuizz from './components/Codequizz';
import Faq from './components/Faq';
import Slider from './components/Slider';
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Frontpage />}></Route>
        <Route  path="/Contact" element={<Contact/>}></Route>
        <Route  path="/Events" element={<Events/>}></Route>
        <Route  path="/Recent" element={<Recent/>}></Route>
        <Route  path="/Events1" element={<Events1/>}></Route>
        <Route  path="/Aboutus" element={<Aboutus/>}></Route>
        {/* <Route path="/Featureus" element={<Featureus/>}></Route> */}
        <Route path="/Priceus" element={<Priceus/>}></Route>
        <Route path="/Teamus" element={<Teamus/>}></Route>
        <Route path="/Bloggrid" element={<Bloggrid/>}></Route>
        <Route path="/Xecom" element={<Xecom/>}></Route>
        <Route path="/Xecom1" element={<Xecom1/>}></Route>
        <Route path="/Detail" element={<Detail/>}></Route>
        <Route path="/Chakravyuh" element={<Chakravyuh/>}></Route>
        <Route path="/Contactus" element={<Contactus/>}></Route>
        <Route path="/Ieeextreme" element={<Ieeextreme/>}></Route>
        <Route path="/Faculty" element={<Faculty/>}></Route>
        <Route path="/Codequizz" element={<CodeQuizz/>}></Route>
        <Route path="/Faq" element={<Faq/>}></Route>
        <Route path="/Slider" element={<Slider/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
