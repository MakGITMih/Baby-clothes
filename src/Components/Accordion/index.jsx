
import { useState } from 'react';
import AccordionItem from './accordionItem';
import './accordion.scss'

const faqList = [
  {
    q: "Состав",
    a: "100% льняная рубашка, сертифицированная OEKO-TEX®",
  },
  {
    q: "Описание",
    a: "Свободная, дышащая и стильная, эта 100% льняная рубашка, сертифицированная OEKO-TEX®, обеспечит вашему малышу безупречный вид и максимальный комфорт. Его квадратный крой идеально подходит для бега по песчаным дюнам, прогулок по городу или парка, а нейтральный цвет идеально подходит для летнего солнца.",
    b: "Льняная ткань обеспечивает воздухопроницаемость в жаркую погоду, сохраняя комфорт вашей милашки. Кроме того, его универсальный дизайн включает ремень, а это значит, что рубашка вашего большого ребенка может стать платьем-рубашкой для маленьких братьев и сестер. Короче говоря, эта рубашка красивая, прочная и удобная для всех ваших маленьких любимых.",
    c: "ВЫ ЗНАЛИ? Березовый лист символизирует защиту, оберегая вашего малыша в его больших приключениях.",
  },
  {
    q: "Функциональность",
    a: "Экологически чистое и этичное производство из льна, сертифицированного OEKO-TEX STANDART 100.",
    b: 'Шлевки для ремня (для ношения как платье-рубашка на размер меньше)',
    c: "Детализация деревянной пуговицы",
  },
  {
    q: "Уход за одеждой",
    a: "Стирайте в холодной или теплой воде (<30°С) с эко-моющим средством. Сушить на веревке или в сушильной машине при низкой температуре. Отдать или пожертвовать, когда вырастешь",
  },
  {
    q: "Доставка и доставка",
    a: "Мы предлагаем бесплатную доставку при заказе на сумму более 5000 р. Доставка заказов зарубеж не включена в бесплатную доставку.",
    b: 'Мы предлагаем стандартные тарифы на внутреннюю и международную доставку. Если вы находитесь в Санкт-Петербурге, доставка будет осуществлена ​​в тот же день, если заказ будет получен до 13:00. В случае получения заказа после 13:00 товары будут доставлены на следующий день. Все заказы, полученные до 13:00 будут отправлены в тот же день, независимо от внутреннего или международного адреса.',
  },
];


function Accordion() {

  const [openId, setId] = useState(null);

  return <ul className='accordion'>
    {faqList.map((faqItem, id) => {
      return (
        <AccordionItem
          onClick={() => (id === openId ? setId(null) : setId(id))}
          faqItem={faqItem}
          isOpen={id === openId}
          key={id}>
        </AccordionItem>
      )
    })}
  </ul>

};


export default Accordion;