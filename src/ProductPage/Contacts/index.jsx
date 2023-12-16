import Header from '../../Components/Header';
import './contacts.scss'

import { ReactComponent as Group2080 } from '../Contacts/Group 2080.svg';
import { ReactComponent as Group2090 } from '../Contacts/Group 2090.svg';
import { ReactComponent as Group2086 } from '../Contacts/Group 2086.svg';
import { ReactComponent as Group2083 } from '../Contacts/Group 2083.svg';
import { ReactComponent as Group2081 } from '../Contacts/Group 2081.svg';




// import Konev from '../Impact/evgeniy-konev.jpg'


function Contacts() {
    return (
        <>
            <section className="contacts">
                <div className="contacts__wrap-header">
                    <Header></Header>
                </div>
                <div className='contacts__social'>
                    <div className='contacts__social_block-left'>
                        <div className='contacts__social_wrap-svg'>
                            <div><Group2080></Group2080></div>
                            <div className='contacts__social_group2090'><Group2090></Group2090></div>
                        </div>
                        <div className='contacts__social_subtitle'>Напишите нам!</div>
                        <div className='contacts__social_title'>Давайте будем социальными!</div>
                        <div className='contacts__social_text'>Мы здесь, чтобы помочь всем и во всем, общайтесь с нами здесь!</div>
                        <div className='contacts__social_email-text'>EMAIL</div>
                        <div className='contacts__social_email'>test@mail.ru</div>
                        <div className='contacts__social_question'>Для запросов, возврата и обмена, а также по любым вопросам</div>
                    </div>
                    
                    <div className='contacts__social_block-center'>
                        <div className='contacts__social_group2086'><Group2086></Group2086></div>
                        <div className='contacts__social_feel'>Не&nbsp;стесняйтесь</div>
                        <div><Group2083></Group2083></div>
                    </div>

                    <div className='contacts__social_block-right'>
                        <div className='contacts__social_content'>
                            <div className='contacts__social_wrap-social'>
                                <div className='contacts__social_our'>соцсети</div>
                                <a className='contacts__social_name' href="https://vk.com/" rel="noreferrer" target='_blank'>
                                    <div >ВКонтакте</div>
                                </a>
                                <a  className='contacts__social_name' href="https://www.instagram.com/" rel="noreferrer" target='_blank'>
                                    <div>Instagram</div>
                                </a>
                                <a  className='contacts__social_name'href="https://www.facebook.com" rel="noreferrer" target='_blank'>
                                    <div>Facebook</div>
                                </a>
                            </div>
                            <div className='contacts__social_wrap-time'>
                                <div className='contacts__social_time'>Время работы</div>
                                <div>9:00&nbsp;-&nbsp;21:00</div>
                            </div>
                        </div>
                        <div className='contacts__social_group2081'><Group2081></Group2081></div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Contacts;

