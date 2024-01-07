import axios from "axios";
import { GET_OTHER, GET_LATTEST, GET_ARTICLE_DATA, HANDEL_LIKES_ARTICLES,CLEAR_ARTICLE_DATA } from "../reducesrs/type";
const URL = "http://localhost:3004/articles"  //api or end point

export const latestNews = async () => {
    try {
        const request = await axios.get(`${URL}?_order=desc&_end=2`)
        return {
            type: GET_LATTEST,
            payload: request.data

        };
    } catch (error) {
        console.log(error);
    }
};
export const otherNews = async () => {
    const request = await axios.get(`${URL}?_order=desc&_start=3&_end=15`)
        .then((response) => response.data)

    return {
        type: GET_OTHER,
        payload: request

    };
};
export const getarticledata = async (id) => {
    const request = await axios.get(`${URL}?id=${id}`)

    return {
        type: GET_ARTICLE_DATA,
        payload: request.data

    };
};
export const handelLikesarticles = async (newLikes, id) => {
    const request = await axios.put(`${URL}/id=${id}`,
        { likes: newLikes }
    );
 return {
        type: HANDEL_LIKES_ARTICLES,
        payload: request.data,

    };
};

export const clearArticledata=()=>{
    return {
        type: HANDEL_LIKES_ARTICLES,
        payload: null,

    };
};
