import {
    END_LOADING_RANKING,
    GET_RANKING,
    LOGOUT,
    SET_FILTERED_LIST,
    START_LOADING_RANKING
} from '../constants/actionTypes';

const ranking = (state = { isLoading: true, currentPage: 0, numberOfPages: 0, list: [] }, action) => {
    switch (action.type) {
        case START_LOADING_RANKING:
            return {...state, isLoading: true};
        case END_LOADING_RANKING:
            return {...state, isLoading: false};
        case GET_RANKING:
            return {...state, list: action?.payload?.data, currentPage: action?.payload?.currentPage, numberOfPages: action?.payload?.numberOfPages };
        case LOGOUT:
            return state = null;
        default:
            return state;
    }
}

export default ranking;
