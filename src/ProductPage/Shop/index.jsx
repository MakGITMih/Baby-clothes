
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
                {data.map((item) => {
                    return <Product {...item}></Product>
                }
                )}
            </section>

        </>
    );
}

export default Shop;

