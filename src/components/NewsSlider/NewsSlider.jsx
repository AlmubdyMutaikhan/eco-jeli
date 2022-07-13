import './NewsSlider.css';

import Carousel from 'react-material-ui-carousel';
import NewsCard from '../../elements/NewsCard/NewsCard';

const NewsSlider = ({style}) => {
    return(
        <div className="news-slider-container" style={style}>
            <Carousel>
                <NewsCard />
                <NewsCard />
            </Carousel>
        </div>
    )
}

export default NewsSlider;