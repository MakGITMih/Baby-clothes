
import './shop.scss'
import Header from '../../Components/Header';
import Product from '../../Components/Product';
import data from '../../Components/Assets/data.json'



function Shop() {
    // console.log(data);
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
                <div className="shop__wrap-product">
                    {data.map((item) => {
                        return <Product {...item}></Product>
                    }
                    )}
                </div>


            </section>

        </>
    );
}

export default Shop;

