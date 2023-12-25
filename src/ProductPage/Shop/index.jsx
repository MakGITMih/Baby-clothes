import React, { useState } from 'react';

import './shop.scss'
import Header from '../../Components/Header';
import Product from '../../Components/Product';
import Modal from '../../Components/Modal';
import { ReactComponent as Arrow } from '../../Components/Assets/Images/arrow.svg';
import { ReactComponent as Logo } from './treehouse_logo.svg'
import { ReactComponent as Magnifying } from './magnifying.svg'

import ModalFoto from '../Shop/modal.jpg';
// import SearchInfo from '../../Components/SearchInfo';


function Shop({ data, changeInput,searchText,searchCount }) {

    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);


    return (
        <>
            <section className="shop">
                <div className="shop__wrap-header">
                    <Header></Header>
                </div>
                
                <div className="shop__wrap-img">
                    <div className="shop__wrap-text">
                        <span className="shop__text">Стили, одобренные <br />детьми и природой</span>
                    </div>
                </div >
                <div className="shop__wrap-discount">
                    <div className="shop__discount-text">Скидка <span>15 %</span> на ваш первый&nbsp;заказ</div>
                    <div className="shop__wrap-btn">
                        <button className="shop__btn"
                            onClick={() => setModalInfoOpen(true)}>

                            <div className="shop__btn-text">получить</div>
                            <div><Arrow className="shop__btn-arrow"></Arrow></div>
                        </button>
                        <Modal
                            isOpen={modalInfoIsOpen}
                            onClose={() => setModalInfoOpen(false)}>
                            <div className="shop__wrap-modal">
                                <div className="shop__modal-img">
                                    <img src={ModalFoto} alt="" />
                                </div>
                                <div className="shop__wrap-content">
                                    <div className="shop__wrap-logo"><Logo className="shop__wrap-logo"></Logo></div>
                                    <div className="shop__modal-title">Хотите сэкономить <span>15 %</span> в вашем первом заказе?
                                    </div>
                                    <div className="shop__modal-text">
                                        Зарегистрируйтесь здесь и примите участие в чем-то действительно особенном, получите эксклюзивные предложения, обновления, новинки и вдохновение. Отпишитесь в любое время.
                                    </div>
                                    <div className='shop__wrap-email'>
                                        <form className='shop__email'>
                                            <input className='shop__email-text' type='email' placeholder='Ваша почта'>
                                            </input>
                                            <button className='shop__email-btn' >
                                                <span className='shop__btn-text'>получить</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </Modal>
                       
                    </div>
                </div>
                <div className='shop__search-wrap'>
                    <form className='shop__search'>
                        <input className='shop__searchText' spellCheck='false' type='text' placeholder='Поиск...'
                            onInput={changeInput}
                        >
                        </input>
                        {/* <button className='shop__searchBtn'>
                                 <Magnifying className='shop__magnifying'></Magnifying>
                                 </button>                         */}
                    </form>
                </div>

                {searchText && <section className="searchInfo">
                По запросу <span>{searchText}</span> найдено {searchCount} товаров
            </section>}

                <div className="shop__wrap-product">
                    {data.map((item) => {
                        return <Product {...item} key={item.picture}></Product>
                    }
                    )}
                </div>
                
            </section>
        </>
    );
}

export default Shop;





