import './NewsSlider.css';

import Carousel from 'react-material-ui-carousel';
import NewsCard from '../../elements/NewsCard/NewsCard';

const NewsSlider = ({style}) => {
    return(
        <div    className="news-slider-container" 
                id="about"
                style={style}>
            <Carousel>
                <NewsCard img='https://avatars.mds.yandex.net/i?id=70edf9c47e034345255df0a668bb1bce-5332128-images-thumbs&n=13'/>
                <NewsCard img='https://avatars.mds.yandex.net/i?id=d3ac18cb3ff868ad948e0e20453baccc-5707320-images-thumbs&n=13'/>
            </Carousel>
        </div>
    )
}

export default NewsSlider;