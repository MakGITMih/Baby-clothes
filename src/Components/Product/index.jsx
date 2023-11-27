
import './product.scss'
import { ReactComponent as Fair } from '../Product/Fair Working Conditions.svg';
import { ReactComponent as Journey } from '../Product/product journey.svg';
import { ReactComponent as Sustainable } from '../Product/Sustainable Materials.svg';
import { ReactComponent as Heart } from '../Product/heart.svg';

import React, { useState } from 'react'

import Four from '../Product/image 4.jpg';
import Accordion from '../Accordion';



function Product({ picture, name, description, price, novelty, isFavorite, }) {
   
    const [isFavorites, setFavorit] = useState(isFavorite)

    return (
        <>
            <section className="product">

                <div className="product__wrap-img">
                    <img className="product__img" src={picture} alt="" />
                    {novelty && <div className="product__new">новинка</div>}
                </div>
                <div className="product__name">
                    <span>
                        {name}
                    </span>
                </div>
                <div className="product__description">
                    <span>
                        {description}
                    </span>
                </div>
                <div className="product__wrap-price">
                    <div className="product__price">
                        <span>{price}&nbsp;₽</span>
                    </div>
                    <div >
                        <button className="product__btn-heart">
                            <Heart className={isFavorites ? 'product__active' : 'product__heart'}
                            onClick={() => { setFavorit(!isFavorites) }}></Heart>
                        </button>
                    </div>
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

{/* <Accordion></Accordion> */ }                          