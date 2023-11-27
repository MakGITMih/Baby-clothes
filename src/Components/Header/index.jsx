import './header.scss'
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './treehouse_logo.svg'
import { ReactComponent as Magnifying } from './magnifying.svg'


function Header() {
    return (
        <>
            <section className="header">
                <div className="header__menu">
                    <div className='header__logo-wrap'>
                        <Logo className='header__logo'></Logo>
                        <div className='header__name'>
                        <span className='header__letter'>M</span>ia
                        <span className='header__letter'>M</span>onica
                            </div>
                    </div>
                    <ul className='header__menu-wrap'>
                        <div className='header__menu-one'>
                        <NavLink to={'/'} >
                            <li>Главная</li>
                        </NavLink>
                        <NavLink to={'/shop'} >
                            <li>Магазин</li>
                        </NavLink>
                        <NavLink to={'/team'} >
                            <li>Команда</li>
                        </NavLink>
                        <NavLink to={'/impact'} >
                            <li>О&nbsp;нас</li>
                        </NavLink>
                        </div>
                        <div className='header__menu-two'>
                        <NavLink to={'/card'} >
                            <li>Подарочная&nbsp;карта</li>
                        </NavLink>
                        <NavLink to={'/faq'} >
                            <li>FAQ</li>
                        </NavLink>
                        <NavLink to={'/journal'} >
                            <li>Журнал</li>
                        </NavLink>
                        <NavLink to={'/contacts'} >
                            <li>Контакты</li>
                        </NavLink>
                        </div>
                    </ul>
                    {/* <div className='header__search-wrap'>
                        <form className='header__search'>
                            <input className='header__searchText' type='text' placeholder='Поиск...' onInput={changeInput}>
                            </input>
                            <button className='header__searchBtn'> <Magnifying className='header__magnifying'></Magnifying></button>                        
                        </form>                    
                    </div> */}
                </div>
            </section>
        </>
    );
}

export default Header;

