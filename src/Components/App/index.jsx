
import './app.scss';

import data from '../Assets/data.json'

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, {useEffect, useState} from 'react'

import ScrollRestoration from '../ScrollRestoration';
import Card from '../../ProductPage/Card';
import Contacts from '../../ProductPage/Contacts';
import Faq from '../../ProductPage/Faq';
import Home from '../../ProductPage/Home';
import Impact from '../../ProductPage/Impact';
import Journal from '../../ProductPage/Journal';
import Shop from '../../ProductPage/Shop';
import Team from '../../ProductPage/Team';
import Footer from '../Footer';
// import SearchInfo from '../SearchInfo';




function App() {

const [cards, setCards] = useState (data);
const [searchQuery, setSearchQuery] = useState ('');

const handleInput = (e) => {
  setSearchQuery (e.target.value)
}

useEffect (() => {
  const filteredCards = data.filter ((item) =>
  item.name.toUpperCase().includes(searchQuery.toUpperCase())
  );
  setCards(filteredCards);
},[searchQuery] )



  return (
<BrowserRouter>
<ScrollRestoration></ScrollRestoration>
    <div className="app">
      <div className='app__content'>
        {/* <SearchInfo searchText={searchQuery} searchCount={cards.length} ></SearchInfo> */}
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/faq' element={<Faq></Faq>}></Route>
            <Route path='/contacts' element={<Contacts></Contacts>}></Route>
            <Route path='/journal' element={<Journal></Journal>}></Route>
            <Route path='/impact' element={<Impact></Impact>}></Route>
            <Route path='/shop' element={<Shop
              data={cards}
              changeInput={handleInput}
              searchText={searchQuery}
              searchCount={cards.length}>
            </Shop>}></Route>
            <Route path='/team' element={<Team></Team>}></Route>
            <Route path='/card' element={<Card></Card>}></Route>
            <Route path='*' element={<Home></Home>}></Route>
          </Routes>
        <Footer></Footer>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

