
import './app.scss';
import { Route, Routes } from 'react-router-dom';
import Card from '../../ProductPage/Card';
import Contacts from '../../ProductPage/Contacts';
import Faq from '../../ProductPage/Faq';
import Home from '../../ProductPage/Home';
import Impact from '../../ProductPage/Impact';
import Journal from '../../ProductPage/Journal';
import Shop from '../../ProductPage/Shop';
import Team from '../../ProductPage/Team';

function App() {
  return (
    <div className="app">
      <div className='app__content'>
        
        <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/faq' element = {<Faq></Faq>}></Route>
        <Route path='/contacts' element = {<Contacts></Contacts>}></Route>
        <Route path='/journal' element = {<Journal></Journal>}></Route>
        <Route path='/impact' element = {<Impact></Impact>}></Route>
        <Route path='/shop' element = {<Shop></Shop>}></Route>
        <Route path='/team' element = {<Team></Team>}></Route>
        <Route path='/card' element = {<Card></Card>}></Route> 
        <Route path='*' element = {<Home></Home>}></Route>
        </Routes>
        </div>
    </div>
  );
}

export default App;
