import React from 'react';

import './footer.scss'

import { NavLink  } from 'react-router-dom';
import { ReactComponent as Logos } from './treehouse_logo.svg'
import { ReactComponent as Group2078 } from './Group 2078.svg'
import { ReactComponent as Group2075 } from './Group 2075.svg'
import { ReactComponent as Group2077 } from './Group 2077.svg'
import { ReactComponent as Up } from './Up.svg'

import { animateScroll as scroll,} from 'react-scroll'


function Footer() {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    // const handleClick = (e) => {
    //     e.preventDefault();
    // };

    return (
        <>
            <section className="footer">
                <Group2078 className="footer__group2078"></Group2078>
                <Group2075 className="footer__group2075"></Group2075>
                <Group2077 className="footer__group2077"></Group2077>
                <button onClick={scrollToTop}>
                <Up className="footer__up"></Up>
                </button>
                
                
                <div className="footer__content">
                    <div className="footer__wrap-left">
                        <div className="footer__wrap-text">
                            <span className="footer__text">подпишитесь на нашу рассылку<br />и получите скидку 15% на первый заказ</span>
                            <div className='footer__wrap-email'>
                                <form className='footer__email'>
                                    <input className='footer__email-text' type='email' placeholder='Ваша почта'>
                                    </input>
                                    <button className='footer__email-btn' >
                                        <span className='footer__btn-text'>получить</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='footer__wrap-logo'>
                            <Logos className='footer__logo'></Logos>
                            <span className='footer__logo-text'>MiaMonica</span>
                        </div>
                    </div>
                    <div className="footer__wrap-right">
                        <div className="footer__wrap-block">
                            <div className="footer__subtitle">КАРТА САЙТА</div>
                            <div className="footer__block-text">
                            <NavLink to ={'/'}><span>Главная</span> </NavLink> 
                            <NavLink  to ={'/shop'}><span>Магазин</span></NavLink>
                            <NavLink to ={'/team'}><span>Команда</span></NavLink>
                            <NavLink to ={'/impact'}><span>О нас</span></NavLink>
                            <NavLink to ={'/card'}><span>Подарочная <br />карта</span></NavLink>
                            <NavLink to ={'/faq'}><span>FAQ</span></NavLink>
                            <NavLink to ={'/journal'}><span>Журнал</span></NavLink>
                            <NavLink to ={'/contacts'}><span>Контакты</span></NavLink>
                            </div>
                        </div>
                        <div className="footer__wrap-block">
                            <div className="footer__subtitle">СОЦСЕТИ</div>
                            <div className="footer__block-text">
                            <a href="https://vk.com/" rel="noreferrer" target='_blank'>
                                <span className='footer__social_name'>ВКонтакте</span>
                                </a>
                                <a href="https://www.instagram.com/" rel="noreferrer" target='_blank'>
                                <span>Instagram</span>
                                </a>
                                <a href="https://www.facebook.com" rel="noreferrer" target='_blank'>
                                <span>Facebook</span>
                                </a>
                            </div>
                        </div>
                        <div className="footer__wrap-block">
                            <div className="footer__subtitle">КЛИЕНТАМ</div>
                            <div className="footer__block-text">
                                <span>Условия<br />использования</span>
                                <span>Политика<br />конфиденциальности</span>
                                <span>Доставка<br />и возврат</span>
                                <span>Отследить<br />заказ</span>
                                {/* <span>Подарочная <br />карта</span> */}
                            </div>
                        </div>
                        <div className="footer__wrap-block">
                            <div className="footer__subtitle">оплаты</div>
                            <div className="footer__block-text" >
                                <span>test</span>
                                <span>test</span>
                                <span>test</span>
                                <span>test</span>
                                <span>test</span>
                                <span>test</span>
                                <span>test</span>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        </>
    );
}

export default Footer;

