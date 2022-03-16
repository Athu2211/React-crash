import { DISHES } from '../data/dishes';
import { COMMENTS } from '../data/comments';
import { LEADERS } from '../data/leaders';
import { PROMOTIONS } from '../data/promotions';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
}