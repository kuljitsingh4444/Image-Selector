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

const swapImages = (state) => {
    return {
        ...state,
        imagesIndex : {
            ...state.imagesIndex,
            1 : state.imagesIndex[2],
            2 : state.imagesIndex[1]
        }
    }   
}

export default function ( state = initialState, action ) {
    switch(action.type){
        case Types.UPDATE_IMAGE_INDEX:
            return updateImageIndex(state,action);
        case Types.SWAP_IMAGES:
            return swapImages(state);
        default :
            return state;
    }
}