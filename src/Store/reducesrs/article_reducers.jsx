
import { GET_ARTICLE_DATA, GET_LATTEST,GET_OTHER,CLEAR_ARTICLE_DATA, HANDEL_LIKES_ARTICLES } from "./type";

export default  function articles(state={},action){
    console.log( "value check",action)

    
switch (action.type) {
    case GET_LATTEST:
        return{
            ...state,
          latest:action.payload
        }
    
    case GET_OTHER:
        return{
            ...state,
            otherNews:action.payload
        }
    case GET_ARTICLE_DATA:
        return{
            ...state,
            articleData:action.payload
        }
    case HANDEL_LIKES_ARTICLES:
        return{
            ...state,
            article:[action.payload]
        }
    case CLEAR_ARTICLE_DATA:
        return{
            ...state,
            articleData:action.payload
        }

    default: return state
        break;
}
}