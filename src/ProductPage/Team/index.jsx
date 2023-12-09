import Header from '../../Components/Header';
import './team.scss'

import { ReactComponent as Сloud } from '../Team/Vector.svg';
import { ReactComponent as Circleteam } from '../Team/team-circle.svg';
import { ReactComponent as Arrowteam } from '../Team/Group 2080.svg';
import { ReactComponent as Sheet } from '../Team/Group 2083.svg';
import { ReactComponent as Boy } from '../Team/Immagine inserita.svg';
import { ReactComponent as Fan } from '../Team/leaf3.svg';
import { ReactComponent as LeafBig } from '../Team/leafbig.svg';
import { ReactComponent as LeafSmall } from '../Team/leafsmall.svg';
import { ReactComponent as Announcement } from '../Team/Group 2086.svg';
import { ReactComponent as Arrow } from '../../Components/Assets/Images/arrow.svg';
import { ReactComponent as Vector6 } from '../Team/Vector 6.svg';
import { ReactComponent as Stroke } from '../Team/Stroke.svg';
import { ReactComponent as Vector5 } from '../Team/Vector 5.svg';
import { ReactComponent as Group2073 } from '../Team/Group 2073.svg';

import { Link } from 'react-router-dom';


import Mother from '../Team/image 9.jpg'
import Sandra from '../Team/sandra-seitamaa.jpg'
import Shutterstock from '../Team/shutterstock.jpg'
import Principles from '../Team/0-195.jpg'
import BoyTeam from '../Team/Group 2091.jpg'
import Nathan from '../Team/nathan-dumlao.jpg'

function Team() {
    return (
        <>
            <section className="team">
                <div className="team__wrap-header">
                    <Header></Header>
                </div>
                <div className='team__wrap-mother'>
                    <div className='team__wrap-img'>
                        <img src={Mother} alt="" />
                    </div>
                    <div className='team__wrap-content'>
                        <div className='team__wrap-block'>
                            <div className='team__wrap-cloud'>
                                <Сloud></Сloud>
                            </div>
                            <div className='team__wrap-titles'>
                                <div className='team__title-cloud'>Всем привет!</div>
                                <div className='team__subtitle-cloud'>просто некоторая информация</div>
                            </div>
                        </div>
                        <div className='team__wrap-who'>
                            <div className='team__wrap-сircleteam'>
                                <div className='team__wrap-сircl'>
                                    <Circleteam className='team__сircleteam'>
                                    </Circleteam>
                                    <div className='team__wrap-us'>
                                        <span className='team__us'>о нас</span>
                                    </div>
                                </div>
                            </div>
                            <div className='team__аrrowteam'>
                                <Arrowteam className='team__аrrowteam'></Arrowteam>
                            </div>
                            <div className='team__wrap-tagline'>
                                <div className='team__tagline-one'>Кто мы есть.</div>
                                <div className='team__tagline-two'>Наш взгляд.</div>
                                <div className='team__tagline-free'>Наша миссия.</div>
                            </div>
                        </div>
                        <div className='team__wrap-text'>
                            <p>Создано Татьяной, мамой со страстью к прогрессу, устойчивому развитию и этике. MiaMonica – это не только вневременной и причудливый стиль, но он также служит более глубокой цели, направленной на то, чтобы сделать лучше для нашей планеты, нашего общества и наших детей</p>
                            <p>Мы стремимся дать родителям возможность сделать осознанный выбор одежды для своих семей. Мы считаем, что коллективный переход к более устойчивым практикам — единственный способ изменить ландшафт традиционной моды.</p>
                        </div>
                    </div>
                </div>
                <div className="team__wrap-svg">
                    <div className="team__fan">
                        <Fan></Fan>
                    </div>
                    <div className="team__boy">
                        <Boy></Boy>
                    </div>
                </div>
                <div className="team__wrap-sheet">
                    <div className="team__block-sheet">
                        <Sheet></Sheet>
                        <div className="team__text-sheet">Мы стремимся создать непредвзятое пространство, где вы сможете исследовать мир медленной моды. Наша цель — поддерживать вас на каждом этапе пути, отвечая на любые вопросы и вместе работая над коллективными изменениями.
                        </div>
                        <div className="team__quotes-sheet">“</div>
                    </div>
                </div>
                <div className="team__wrap-leafbig">
                    <div><LeafBig></LeafBig></div>
                </div>
                <div className="team__wrap-respect">
                    <div className="team__wrap-respect-block">
                        <div className="team__respect-subtitle">устойчивость и уважение</div>
                        <div className="team__respect-title">Наш взгляд</div>
                        <div className="team__respect-subtitle">Мы обещаем вам прозрачность и<br />прогресс,а не совершенство.</div>
                    </div>
                    <div className="team__wrap-respect-text">
                        <p>MiaMonica представляет собой мир, в котором осознанная жизнь и ответственная практика являются нормой, поддерживаемой сообществом, которое отдает приоритет продуманному дизайну.</p><br />
                        <p>
                            С помощью простых гендерно-нейтральных капсульных коллекций, состоящих только из предметов первой необходимости, и прозрачной цепочки поставок мы создаем долговечные вещи, которые выдерживают испытание временем и доставляют удовольствие братьям, сестрам и друзьям.
                        </p>
                    </div>
                    <div className="team__wrap-leafsmall">
                        <LeafSmall></LeafSmall>
                    </div>
                </div>
                <div className="team__mission_wrap">
                    <div className="team__mission">
                        <div className="team__mission_block">
                            <div className="team__mission_subtitle">устойчивые ценности</div>
                            <div className="team__mission_title">Наша миссия</div>
                            <div className="team__mission_subtitle">ПРИСОЕДИНЯЙТЕСЬ К НАМ В ПУТЕШЕСТВИИ к этическим нормам, устойчивой моде и счастливым детям!</div>
                        </div>
                        
                        <div className="team__mission_text">Наша миссия — произвести революцию в детской моде, создав те изменения, которые мы хотим видеть в мире. Мы считаем, что одежда должна быть прежде всего доброй.</div>
                    </div>
                    <div className="team__mission_wrap-img">               
                            <div className="team__mission_sandra-wrap">
                                <img src={Sandra} alt="" />
                            </div>
                            <div className="team__mission_shutterstock-wrap">
                                <img src={Shutterstock} alt="" />
                            </div>
                    </div>
                </div>
                <div className="team__principles">
                    <div className="team__principles_wrap-img">
                        <img src={Principles} alt="" />
                    </div>
                    <div className="team__principles_wrap-text">
                        <div className="team__principles_title">Мы придерживаемся 4 ключевых принципов:
                        </div>
                        <div className="team__principles_wrap-content">
                        <div className="team__principles_wrap-block">
                            <div className="team__principles_numbers">1</div>
                            <div className="team__principles_text">Сертифицированные экологически чистые материалы</div>
                        </div>
                        <div className="team__principles_wrap-block">
                            <div className="team__principles_numbers">2</div>
                            <div className="team__principles_text">Справедливые и безопасные условия труда для всех участников нашей цепочки поставок.</div>
                        </div>
                        <div className="team__principles_wrap-block">
                            <div className="team__principles_numbers">3</div>
                            <div className="team__principles_text">Минимизация нашего воздействия на окружающую среду</div>
                        </div>
                        <div className="team__principles_wrap-block">
                            <div className="team__principles_numbers">4</div>
                            <div className="team__principles_text">Постоянная оценка и улучшение всего вышеперечисленного.</div>
                        </div>
                        </div>
                        <div className="team__principles_name">O.Татьяна</div>
                    </div>
                </div>
               <div className="team__boyteam_wrap">
                <img src={BoyTeam} alt="" />
               </div>
                <div className="team__chat">
                    <div className="team__chat_wrap">
                        <div className="team__chat_wrap-text">
                            <div className="team__chat_title">Давай общаться</div>
                            <div className="team__chat_subtitle">если вы не знаете, с чего начать, мы здесь, чтобы помочь вам в вашем путешествии</div>
                            <div className="team__chat_text"><p>Будь то вопрос о различных типах тканей и их свойствах или о том, как лучше стирать одежду, мы здесь, чтобы поддержать вас на каждом этапе пути.</p><br />
                                <p>
                                    Мы рады поделиться своими знаниями и ответить на любые вопросы!
                                </p>
                            </div>
                           

                            <div className="team__chat_wrap-btn">
                            <Link to={'/shop'} >
                                <button className="team__chat_btn">
                                    <div className="team__chat_btn-text">К ПОКУПКАМ</div>
                                    <div><Arrow className="team__chat_btn-arrow"></Arrow></div>
                                </button>
                            </Link>
                        </div>

                        </div>
                        <div className="team__chat_announcement">
                            <div className="team__chat_announcement-wrap">
                                <div>
                                    <div className="team__chat_announcement-titleleft">
                                        Я&nbsp;выбираю 
                                    </div>
                                    <div className="team__chat_announcement-block">
                                        <div className="team__chat_announcement-signleft">
                                            +
                                        </div>
                                        <div className="team__chat_announcement-blocktext">
                                            <div>Медленно и устойчиво</div>
                                            <div>Органические ткани</div>
                                            <div>Комфорт малышей</div>
                                            <div>Носите свои ценности</div>
                                            <div>Заплати ЕЕ</div>
                                            <div>Прогресс</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="team__chat_announcement-text">
                                или
                                </div>

                                <div>
                                    <div className="team__chat_announcement-titleright">
                                    Лучше уйти
                                    </div>
                                    <div className="team__chat_announcement-block">
                                        <div className="team__chat_announcement-signright">
                                            -
                                        </div>
                                        <div className="team__chat_announcement-blocktext">
                                            <div>Несправедливая цена</div>
                                            <div>Быстрая мода</div>
                                            <div>Полиэстер</div>
                                            <div>Зудящая кожа</div>
                                            <div>Неэтичные решения</div>
                                            <div>Совершенство</div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                            <Announcement className="team__chat_announcement-svg"></Announcement>
                        </div>
                    </div>
               </div>
                <div className="team__press">
                    <div className="team__press_vector6"><Vector6></Vector6></div>
                    <div className="team__press_wrap-svg">
                        <div className="team__press_stroke"><Stroke></Stroke></div>
                        <div className="team__press_vector5"><Vector5></Vector5></div>
                    </div>
                    <div className="team__press_block">
                        <div className="team__press_title">Пресса о нас</div>
                        <div className="team__press_text">«В MiaMonica мы пытаемся вовлечь наше сообщество в это путешествие, делясь с нашими клиентами решениями, которые мы принимаем (и почему), консультируясь с нашей базой и вместе работая над достижением следующей цели».</div>
                        <div className="team__press_wrap-btn">
                            <Link to={'/journal'} >
                                <button className="team__press_btn">ЧИТАТЬ ДАЛЕЕ<Arrow className="team__press_arrow"></Arrow></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="team__info">
                    <div className="team__info_block">
                        <div className="team__info_wrap-svg"><Group2073></Group2073></div>
                        <div className="team__info_subtitle">Давайте вместе создадим значимые изменения</div>
                        <div className="team__info_text">не стесняйся здороваться</div>
                        <div className="team__info_title">test@mail.ru</div>
                    </div>
                    <div  className="team__info_wrap-img">
                         <img src={Nathan} alt="" />             
                    </div>
                </div>
            </section>

        </>
    );
}

export default Team;

