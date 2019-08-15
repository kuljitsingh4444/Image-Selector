import Types from '../types';

const initialState = {
    firstImageIndex : null,
    secondImageIndex : null
}

export default function ( state = initialState, action ){
    switch(action.type){
        case Types.SET_DATA:
        return {
            ...state,
            data : action.data
        }
        default :
            return state;
    }
}