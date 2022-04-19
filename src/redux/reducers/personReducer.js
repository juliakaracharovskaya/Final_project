import { GET_PERSON, SIGN_IN, SIGN_UP } from '../types/personType'

export const personReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                ...action.payload,
            }
        case GET_PERSON:
            return {
                ...state,
                ...action.payload,
            }
            case SIGN_UP:
                return {
                    ...state,
                    ...action.payload
            }
    

        default:
            return state
    }
}