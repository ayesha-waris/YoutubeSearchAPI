import axios from "axios";
import { useEffect, useState } from "react";
const KEY = "AIzaSyBNuCk59QmbF3kLy9hMNurSQ-2flguVpBw";

const YouTubeAPI = (keyword) => {
    const [result, setResult] = useState(null);


    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios({
                "method": "GET",
                "url": 'https://www.googleapis.com/youtube/v3/search',
                "params": {
                    'part': 'snippet',
                    'maxResults': '20',
                    'key': '[KEY]',
                    'q': keyword
                }
            })
            .then((res) => {
                setPosts(res.data.items)
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(posts);
    }, [keyword, posts])



}

export default YouTubeAPI;


// export default axios.create({
//     baseURL: "https://www.googleapis.com/youtube/v3/search",
//     params: {
//         part: "snippet",
//         maxResults: 5,
//         key: KEY,
//         type: 'video'
//     },
//     headers: {}
// });