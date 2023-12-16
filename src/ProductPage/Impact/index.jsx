import Header from '../../Components/Header';
import './impact.scss'

import { Link } from 'react-router-dom';

import { ReactComponent as GlobalOrganic } from '../Impact/Global_Organic.svg';
import { ReactComponent as Oekotex } from '../Impact/Oeko_tex.svg';
import { ReactComponent as Group2086 } from '../Impact/Group 2086.svg';
import { ReactComponent as Group2087 } from '../Impact/Group 2087.svg';
import { ReactComponent as Group2095 } from '../Impact/Group 2095.svg';
import { ReactComponent as Arrow } from '../../Components/Assets/Images/arrow.svg';
import { ReactComponent as Group2094 } from '../Impact/Group 2094.svg';
import { ReactComponent as Leaf2 } from '../Impact/leaf 2.svg';
import { ReactComponent as Group2076 } from '../Impact/Group 2076.svg';
import { ReactComponent as Group2097 } from '../Impact/Group 2097.svg';






import Konev from '../Impact/evgeniy-konev.jpg'
import Victoria from '../Impact/victoria-nazaruk.jpg'
import Nicolic from '../Impact/nickolas-nikolic.jpg'
import Bodnar from '../Impact/ethan-bodnar.jpg'
import Group2093 from '../Impact/Group 2093.jpg'
import O222 from '../Impact/0-222.jpg'
import Jacqueline from '../Impact/jacqueline-munguia.jpg'
import Karina from '../Impact/karina-tess.jpg'


function Impact() {
    return (
        <>
            <section className="impact">
            <div className="impact__wrap-header">
                    <Header></Header>
                </div>
                <div className="impact__organic">
                    <div className="impact__organic_wrap-blocksvg">
                        <div className="impact__organic_group2086"><Group2086></Group2086></div>
                        <div className="impact__organic_group2087"><Group2087></Group2087></div>
                    </div>
                    <div className="impact__organic_wrap-nvironment">
                        <div className="impact__organic_nvironment">
                            <div className="impact__organic_title-left">Окружающая среда</div>
                            <div className="impact__organic_subtitle-left">от способа выращивания хлопка до того, как мы упаковываем нашу продукцию</div>
                            <div className="impact__organic_text-left">Мы стремимся стать лучше во всем: от того, как выращивался хлопок, до типа упаковки, которую мы используем для отправки вашего заказа. Мы следуем ведущим в отрасли требованиям сертификации на каждом этапе нашей цепочки поставок. Узнайте больше об органическом хлопке, сертифицированном GOTS, и льне OEKO-TEX STANDART 100.®</div>
                            <div className="impact__organic_wrap-svg">
                                <div><GlobalOrganic></GlobalOrganic></div>
                                <div><Oekotex></Oekotex></div>
                            </div>
                        </div>
                        <div className="impact__organic_wrap-img">
                            <img src={Victoria} alt="" />
                        </div>
                    </div>


                    <div className="impact__organic_wrap-organic">
                        <div className="impact__organic_wrap-konev">
                            <img src={Konev} alt="" />
                        </div>
                        <div className="impact__organic_wrap-rigth">
                            <div className="impact__organic_wrap-text">
                                <div className="impact__organic_title-rigth">ОБЫЧНЫЙ ПРОТИВ ОРГАНИЧЕСКОГО</div>
                                <div className="impact__organic_text-rigth">Традиционное производство хлопка оказывает значительное негативное воздействие на окружающую среду из-за чрезмерного использования воды, интенсивного использования пестицидов и удобрений, деградации почвы и вклада в выбросы парниковых газов. Мы будем использовать сертифицированный GOTS органический хлопок только для того, чтобы значительно снизить вред окружающей среде.</div>
                            </div>
                            <div className="impact__organic_wrap-know">
                                <div className="impact__organic_title-rigth">ты это знал?
                                </div>
                                <div className="impact__organic_wrap-number">
                                    <div>
                                        <div>Органический хлопок позволяет на </div>
                                        <div className="impact__organic_number">50%</div>
                                        <div>снизить выбросы CO2</div>
                                    </div>
                                    <div>
                                        <div>Органический хлопок позволяет на</div>
                                        <div className="impact__organic_number">91%</div>
                                        <div>уменьшить использование воды</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="impact__world">
                    <div className="impact__world_wrap">
                        <div className="impact__world_text">Наша приверженность здоровью наших детей и планеты, которую они унаследуют от нас, вшита в каждую вещь, которую мы приносим в этот мир.
                        </div>
                        <div className="impact__world_wrap-btn">
                            <Link to={'/shop'} >
                                <button className="impact__world_btn">
                                    <div className="impact__world_btn-text">К ПОКУПКАМ</div>
                                    <div><Arrow className="impact__world_arrow"></Arrow></div>
                                </button>
                            </Link>
                        </div>
                        <div className="impact__world_wrap-svg">
                            <Group2095></Group2095>
                        </div>
                    </div>
                </div>
                <div className="impact__process">
                    <div className="impact__process_wrap-nicolic">
                        <img src={Nicolic} alt="" />
                    </div>
                    <div className="impact__process_wrap-block">
                        <div className="impact__process_wrap-bodnar">
                            <img src={Bodnar} alt="" />
                        </div>
                        <div className="impact__process_wrap-text">
                            <div className="impact__process_title">Процесс</div>
                            <div className="impact__process_subtitle">Мы сотрудничаем с фабриками и фермерами в Индии, приверженными нашим принципам.
                            </div>
                            <div className="impact__process_text">
                            Мы применяем практический подход к контролю за каждым этапом производственного процесса и чувствуем себя привилегированными, имея партнеров, сертифицированных GOTS и OEKO-TEX®, которые работают с использованием возобновляемых источников энергии, таких как солнечные панели. Устойчивое развитие находится на переднем крае их деятельности, подробнее об их инициативах можно прочитать здесь.
                            </div>
                        </div>
                    </div>
                    <div className="impact__process_svg">
                        <Group2094></Group2094>
                    </div>
                </div>
                <div className="impact__champion">
                    <div className="impact__champion_wrap-img">
                        <img src={Group2093} alt="" />
                    </div>
                    <div className="impact__champion_text">
                    отстаивайте свои ценности
                    </div>
                </div>
                <div className="impact__people">
                    <div className="impact__people_left">
                        <div className="impact__people_wrap-content">
                            <div className="impact__people_title">Люди</div>
                            <div className="impact__people_subtitle">рабочие нанимаются на месте,
                                98% из них живут не дальше
                                более 10 км от производства
                            </div>
                            <div className="impact__people_text">
                                Те, кто кроит, шьет и красит нашу одежду, — настоящие ремесленники, которых уважают, они хорошо оплачиваются и работают в здоровых и безопасных условиях. Они пользуются всеми льготами, связанными с их уважаемой профессией, включая льготы по медицинскому обслуживанию и оплачиваемый отпуск.
                            </div>
                        </div>
                        <div className="impact__people_wrap-img">
                            <img src={Jacqueline} alt="" />
                        </div>
                    </div>
                    <div className="impact__people_right">
                        <div className="impact__people_leaf"><Leaf2></Leaf2></div>
                        <div>< img src={O222} alt="" /></div>
                    </div>
                </div>
                <div className="impact__packaging">
                    <div className="impact__packaging_wrap-img">
                        <img src={Karina} alt="" />
                    </div>
                    <div className="impact__packaging_wrap-content">
                        <div className="impact__packaging_wrap-block">
                            <div className="impact__packaging_wrap-svg">
                                <div className="impact__packaging_group2076"><Group2076></Group2076>
                                </div>
                                <div className="impact__packaging_group2097"><Group2097></Group2097>
                                </div>
                            </div>
                            <div className="impact__packaging_title">
                                Упаковка
                            </div>
                            <div className="impact__packaging_subtitle">
                            Вопрос ответственной упаковки является постоянно меняющейся целью.
                            </div>
                            <div className="impact__packaging_text">
                            Мы уделяем пристальное внимание воздействию наших упаковочных материалов. Мы стремимся отказаться от пластика и свести к минимуму всю ненужную упаковку. Материалы, которые мы используем для поддержания чистоты и безопасности ваших вещей, полностью биоразлагаемы.
                            </div>
                        </div>
                        <div className="impact__packaging_wrap-kind">
                            <div className="impact__packaging_k">*</div>
                            <div className="impact__packaging_kind">У каждого бренда есть выбор, и наш выбор — быть добрыми.</div>
                        </div>
                    </div>
                </div>
                <div className="impact__seriously">
                    <div className="impact__seriously_text" >
                    Мы заботимся об окружающей среде так же, как и о людях, участвующих в производстве наших коллекций. Это обязательство, к которому мы относимся серьезно.
                    </div>
                    <div className="impact__seriously_wrap-btn">
                            <Link to={'/journal'} >
                                <button className="impact__seriously_btn">ЧИТАТЬ ДАЛЕЕ<Arrow className="impact__seriously_arrow"></Arrow></button>
                            </Link>
                        </div>
                </div>
            </section>
        </>
    );
}

export default Impact;

