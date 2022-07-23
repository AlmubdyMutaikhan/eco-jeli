import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Article.css';
import Footer from '../Footer/Footer';
import useNews from '../../hooks/useNews';

const Article = () => {
    const param = useParams();
    const {getNewsOne} = useNews();

    const [article, setArticle] = useState({
                title:'Загрузка...',
                text:'Данные загружаются...',
                date:'01.01.01',
                avatar:'https://i.gifer.com/GzgM.gif',
                author:'     Администрация Eco-Jeli'
    });

    const loadArticle = async () => {
        const blog = await getNewsOne(param.blogID);
        
        if(!blog) {
            setArticle({
                title:'Такой статьи не найдено, упс',
                text:'Возможно неправильно указан ID',
                date:'01.01.01',
                avatar:'https://proprikol.ru/wp-content/uploads/2019/12/les-krasivye-kartinki-na-rabochij-stol-2.jpg',
                author:'     Администрация Eco-Jeli'
            })
        } else {
            setArticle(blog);
        }
    }
    

    useEffect(() => {
        loadArticle();
    }, []);
    return (
        <div className="article-container">
            
            <div className='article-title-cont'>
                {article.title}
            </div>
            <div className='news-credits underlined' style={{
                display:'flex',
                alignItems:'center',
                width:'15%',
                paddingTop:'25px'
            }}>
                    <img src={'https://cdn1.iconfinder.com/data/icons/office-322/24/time-date-schedule-event-calendar-appointment-128.png'} alt="date"
                    />
                    <p>{article.date.slice(0, 10)}</p>
            </div>
            <div className='article-avatar-cont'>
                <img src={article.avatar}
                alt="article photo" />
            </div>
            <div className='article-text-cont'> 
            {article.text}
            </div>
            <div className='article-author-cont'>
                Автор : <span>
                    Администрация Eco-Jeli
                    </span>
            </div>
            <Footer style={{
                width:'75%'
            }}/>
        </div>
    )
}

export default Article;