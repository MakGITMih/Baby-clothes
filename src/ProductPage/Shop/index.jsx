
import './shop.scss'
import Header from '../../Components/Header';
import Product from '../../Components/Product';
import { ReactComponent as Magnifying } from './magnifying.svg'


function Shop({data,changeInput}) {
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





