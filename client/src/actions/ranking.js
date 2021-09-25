import {
    END_LOADING_RANKING,
    GET_RANKING, SET_FILTERED_LIST,
    START_LOADING_RANKING
} from "../constants/actionTypes";
import * as api from "../api";


export const getRanking = page => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_RANKING });
        const { data: {data, currentPage, numberOfPages} } = await api.getRanking(page);
        dispatch({ type: GET_RANKING, payload: {data, currentPage, numberOfPages} });
        dispatch({ type: END_LOADING_RANKING });
    } catch (error) {
        console.log(error);
    }
}

export const getRankingByFilter = (filter, page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_RANKING });
        const { data: { data, currentPage, numberOfPages } } = await api.getRankingByFilter(filter, page);
        dispatch({type: GET_RANKING, payload: {data, currentPage, numberOfPages} });
        dispatch({ type: END_LOADING_RANKING });
    } catch (error) {
        console.log(error);
    }
}
