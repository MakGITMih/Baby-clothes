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

import Mother from '../Team/image 9.jpg'


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
            </section>

        </>
    );
}

export default Team;

