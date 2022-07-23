import './NewsSlider.css';

import Carousel from 'react-material-ui-carousel';
import NewsCard from '../../elements/NewsCard/NewsCard';
import useNews from '../../hooks/useNews';
import { useEffect, useState } from 'react';

const NewsSlider = ({style}) => {
    const {getNews} = useNews();
    const [news, setNews] = useState([{title:'Загрузка...',
        desc:'Данные загружаются...',
        date:'01.01.01',
        avatar:'https://i.gifer.com/GzgM.gif'
    }]);

    const loadNews = async () => {
        try {
            const newsDoc = await getNews();
            console.log(newsDoc);
            setNews(newsDoc);        
        } catch(err) {
            console.log(err);
        }
    }


    useEffect(() => {
        loadNews();
    }, []); 

    return(
        <div    className="news-slider-container" 
                id="about"
                style={style}>
            <Carousel>
                {news.map((newsI, key) => {
                    console.log(newsI.text)
                    return <NewsCard 
                                title={newsI.title}
                                text={newsI.desc}
                                avatar={newsI.avatar}
                                date={newsI.date}
                                key={key}
                                id={newsI._id}
                    />
                })}
            </Carousel>
        </div>
    )
}

export default NewsSlider;