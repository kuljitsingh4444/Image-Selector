import ActionCreator from './action';

export const upadateImageIndex = (data) => dispatch => {
    dispatch(ActionCreator.upadateImageIndex(data));
}

export const swapImagesAction = () => dispatch => {
    dispatch(ActionCreator.swapImagesAction());
}