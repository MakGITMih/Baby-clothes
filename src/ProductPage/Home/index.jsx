import Header from '../../Components/Header';
import './home.scss'
import { ReactComponent as Arrow } from '../../Components/Assets/Images/arrow.svg';
import { ReactComponent as Fern } from '../Home/fern.svg';
import { ReactComponent as Magic } from '../Home/magic.svg';
import { ReactComponent as Girl } from '../Home/girl.svg';
import { ReactComponent as HeartCircle } from '../Home/heart-circle.svg';
import { ReactComponent as Circle } from '../Home/circle.svg';
import { ReactComponent as Feather } from '../Home/feather.svg';
import { ReactComponent as Microphone } from '../Home/microphone.svg';
// import { ReactComponent as Boys } from '../Home/Group 2058.svg';


import { Link } from 'react-router-dom';
import Ferns from '../Home/ferns.jpg';
import Eduardo from '../Home/eduardo.jpg';
import Hands from '../Home/hands.jpg';
import Girlfriends from '../Home/girlfriends.jpg';
import Looking from '../Home/looking.jpg';
import Percent from '../Home/percent.jpg';
import Underwear from '../Home/underwear.jpg';
// import Boy from '../Home/boy.jpg';

function Home() {

   
    return (
        <>
            <section className="home">
                {/* ------------------ONE----------- */}
                <div className="home__fullscreen">
                    <div className="home__wrap-header">
                        <Header></Header>
                    </div>
                    <div className="home__wrap-content">
                        <div><span className="home__name">MiaMonica</span></div>
                        <div><span className="home__title-one">Маленькая&nbsp;одежда.</span></div>
                        <div><span className="home__title-two">Большое&nbsp;влияние.</span></div>
                        <div className="home__text"><span >Высококачественная детская одежда,тщательно изготовленная<br /> из экологически чистых материалов,бережно<br />относящихся к планете.Эти вневременные модели станут идеальными<br />спутниками вашего маленького искателя приключений,<br />куда бы его ни завело воображение.</span></div>
                        <div className="home__wrap-btn">
                            <Link to={'/shop'} >
                                <button className="home__btn">
                                    <div className="home__btn-text">К ПОКУПКАМ</div>
                                    <div><Arrow className="home__btn-arrow"></Arrow></div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="home__fullscreen-footer">
                        <div className="home__fullscreen-tagline">Покупай хорошее,делай хорошее.</div>
                        <div className="home__fullscreen-scroll">
                            <div><Arrow className="home__arrow"></Arrow></div>
                        </div>
                    </div>
                </div>
                {/* ------------------TWO----------- */}
                <div className="home__hi">
                    <div className="home__wrap-block">
                        <div className="home__wrap-eduardo">
                            <img className="home__eduardo-img" src={Eduardo} alt="" />
                            <div className="home__eduardo-text">MiaMonica</div>
                        </div>
                        <div className="home__wrap-fern"><Fern></Fern></div>
                        <div> <img src={Ferns} alt="" /></div>
                    </div>
                    <div className="home__wrap-hi-text">
                        <div className="home__hi-name">Добро пожаловать!</div>
                        <div className="home__hi-title-one">Привет, знакомься,</div>
                        <div className="home__hi-title-two">MiaMonica</div>
                        <div className="home__hi-text">Тщательно созданная детская одежда, нейтральная с гендерной точки зрения, ориентированная на вашего малыша и разработанная с большой заботой о нашей планете и людях на ней.</div>
                        <Link to={'/impact'} >
                            <button className="home__hi-btn">
                                <div className="home__hi-btn-text">ЧИТАТЬ ДАЛЕЕ</div>
                                <div><Arrow className="home__hi-arrow"></Arrow></div>
                            </button>
                        </Link>
                    </div>
                </div>
                {/* ------------------THREE----------- */}
                <div className="home__priorities">
                    <div className="home__priorities-magic"><Magic></Magic></div>
                    <div className="home__priorities-left">
                        <div className="home__priorities-wrap-text">
                            <div className="home__priorities-title">Мы уделяем приоритетное внимание вашему спокойствию.</div>
                            <div className="home__priorities-block">
                                <div className="home__priorities-subtitle"><span className="home__priorities-number">1</span> экономия вашего времени </div>
                                <div className="home__priorities-text">Каждый предмет нашей коллекции идеально сочетается с другим. Инвестируйте в несколько вещей или всю линию, чтобы получить сезонную одежду, которая прослужит долго и будет любима другими, когда ваш малыш вырастет.</div>
                            </div>
                            <div className="home__priorities-block">
                                <div className="home__priorities-subtitle"><span className="home__priorities-number">2</span> этичное производство</div>
                                <div className="home__priorities-text">Наша приверженность этичному производству — это не просто риторика. Мы ставим благополучие работников и окружающую среду на первый план при принятии решений. Всегда.</div>
                            </div>
                        </div>
                        <div className="home__priorities-girlfriends">
                            <img src={Girlfriends} alt="" />
                        </div>
                    </div>
                    <div className="home__priorities-rigth">
                        <div className="home__priorities-wrap-imges">
                            <div className="home__priorities-wrap-heart">
                                <div className="home__priorities-heartcircle"><HeartCircle></HeartCircle></div>
                                <div className="home__priorities-circle"><Circle></Circle></div>
                                <div className="home__priorities-girl"><Girl></Girl></div>
                            </div>
                            <div>< img src={Hands} alt="" /></div>
                        </div>
                        <div className="home__priorities-wrap-text">
                            <div className="home__priorities-block">
                                <div className="home__priorities-subtitle"><span className="home__priorities-number">3</span> Высочайшее качество</div>
                                <div className="home__priorities-text">Мы используем только экологически чистые ткани высочайшего качества, в том числе сертифицированный GOTS органический хлопок и лен OEKO-TEX STANDARD 100, чтобы обеспечить уход за нежной кожей вашего ребенка.</div>
                            </div>
                            <div className="home__priorities-block">
                                <div className="home__priorities-subtitle"><span className="home__priorities-number">4</span> бренд, принадлежащий женщине </div>
                                <div className="home__priorities-text">Выбирая нас, вы поддерживаете этичный и устойчивый малый бизнес, принадлежащий женщине. Мы не просто говорим, мы идем.</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ------------------FOUR----------- */}

                <div className='home__looking'>
                    <div className='home__looking-subtitle'>давай сделаем покупки</div>
                    <div className='home__looking-title'>Что Вы ищете?</div>
                    <div className='home__looking-wrap-img'>
                        <div className='home__looking-feather'><Feather></Feather></div>
                        <img src={Looking} alt="" />
                    </div>
                </div>

                {/* ------------------FIVE----------- */}
                <div className='home__percent'>
                    <div className='home__percent-block'>
                        <div className='home__percent-wrap-microphone'><Microphone></Microphone></div>
                        <div className='home__percent-off'>25% off</div>
                        <div className='home__percent-text'>Избавьте себя от головной боли, связанной с бесконечными покупками, с нашей капсульной коллекцией. Купите 5 предметов, сэкономьте 25% и наслаждайтесь бесконечным выбором нарядов, одевая своих малышей в кратчайшие сроки!</div>
                        <div className='home__percent-wrap-btn'>
                            <Link to={'/shop'} >
                                <button className="home__percent-btn">
                                    <div className="home__percent-btn-text">К ПОКУПКАМ</div>
                                    <div><Arrow className="home__percent-btn-arrow"></Arrow></div>
                                </button>
                            </Link>
                        </div>
                        <div className='home__percent-img-underwear'><img src={Underwear} alt="" /></div>
                    </div>
                    <div className='home__percent-wrap-img'>
                        < img src={Percent} alt="" />
                    </div>
                </div>
                <div className='home__percent-wrap-bottom'>
                    <div className='home__percent-wrap-star'>
                        <div className='home__percent-star'>*</div>
                        <div className='home__percent-star-text'>Вся коллекция имеет гендерно-нейтральный стиль,и каждый предмет идеально сочетается с другим.</div>
                    </div>
                </div>
                <div className='home__buy'>
                 
                    <div className='home__buy-text-one'>
                    Покупайте меньше,
                    </div>
                    <div className='home__buy-text-two'>
                     покупайте лучше
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

