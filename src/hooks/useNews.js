import axios from 'axios';

export default function useNews(setLoading, setMsg, setStatus) {
    const getNews = async () => {
        try {
            const blogs = await axios.get('/blog/all/blogs');
            return blogs.data.blogs;
        } catch(err) {
            console.log(err);
            throw new Error('Упс, что-то пошло не так...');
        }
    }

    return {
        getNews
    }
}
