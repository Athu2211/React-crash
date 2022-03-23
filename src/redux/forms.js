// export const Feedback = {
//     firstname: '',
//     lastname: '',
//     mob: '',
//     email: '',
//     agree: false,
//     contactType: 'Tel.',
//     message: ''
// };

import * as ActionTypes from './action/ActionTypes';

export const Feedback = (state = { feedbacks: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return {
                ...state,
                feedbacks: state.feedbacks.concat(feedback)
            };

        default:
            return state;
    }
};