import './header.scss'

import { ReactComponent as Logo } from './treehouse_logo.svg'


function Header() {
    return (
        <>
            <section className="header">
                <div className="header__menu">
                    <div className='header__logo-wrap'>
                        <Logo className='header__logo'></Logo>
                        <div className='header__name'>Treehouse</div>
                    </div>
                    <ul className='header__menu-wrap'>
                        <li>Магазин</li>
                        <li>О&nbsp;нас</li>
                        <li>Наше&nbsp;влияние</li>
                        <li>Подарочная карта</li>
                        <li>FAQ</li>
                        <li>Журнал</li>
                        <li>Контакты</li>
                    </ul>
                    <div className='header__search-wrap'>
                        ПОИСК
                    </div>
                </div>
            </section>

        </>
    );
}

export default Header;

