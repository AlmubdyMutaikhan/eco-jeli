import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Article.css';

const Article = () => {
    const param = useParams();
    useEffect(() => {
        console.log(param.blogID);
    }, []);
    return (
        <div className="article-container">
        
        </div>
    )
}

export default Article;