import './mapYandex.scss'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function MapYandex() {

    return (
        <>

            <YMaps>
                <div className='map__wrap'>
                    <Map defaultState={{
                        center: [59.950839, 30.246060], zoom: 15,
                    }}
                        width='100%'
                        height="100%"
                    >
                        <Placemark geometry={[59.950839, 30.246060]}></Placemark>
                    </Map>
                </div>
            </YMaps>

        </>
    );
}

export default MapYandex;
