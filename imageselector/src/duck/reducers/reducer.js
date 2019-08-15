import Types from '../types';

const initialState = {
    imagesIndex : {
        1 : null,
        2 : null
    }
}

const updateImageIndex = (state,action) => {
    return {
        ...state,
        imagesIndex : {
            ...state.imagesIndex,
            [action.data.imageNumber] : action.data.imageIndex
        }
    }
}

export default function ( state = initialState, action ) {
    switch(action.type){
        case Types.UPDATE_IMAGE_INDEX:
            return updateImageIndex(state,action);
        default :
            return state;
    }
}