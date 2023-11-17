
import './product.scss'
import { ReactComponent as Fair } from '../Product/Fair Working Conditions.svg';
import { ReactComponent as Journey } from '../Product/product journey.svg';
import { ReactComponent as Sustainable } from '../Product/Sustainable Materials.svg';

import Four from '../Product/image 4.jpg';
import Accordion from '../Accordion';



function Product(props) {
    console.log(props);
    return (
        <>
            <section className="product">
             
                    <div className="product__wrap-img">
                        <img className="product__img" src={props.picture} alt="" />
                    </div>
                    <div className="product__name">
                            <span>
                                {props.name}
                            </span>
                        </div>
                        <div className="product__description">
                            <span>В этой очаровательной льняной рубашке ваш малыш будет выглядеть безупречно и чувствовать себя максимально комфортно.
                            </span>
                        </div>
                        <div className="product__wrap-price">
                            <div className="product__price"><span>{props.price}р</span></div>
                        </div> 
                      
            </section>
        </>
    );
}

export default Product;


 {/* <div className="product__wrap-new">
                            <span className="product__new" >НОВИНКА</span>
                        </div>    */}

 {/* <div className="product__wrap-svg">
                                <div><Fair></Fair></div>
                                <div><Sustainable></Sustainable></div>
                                <div><Journey></Journey></div>
                               </div> */}

     {/* <Accordion></Accordion> */}                          