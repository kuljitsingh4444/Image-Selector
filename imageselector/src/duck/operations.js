import ActionCreator from './action';

export const getImageIndex = (data) => dispatch => {
    dispatch(ActionCreator.getImageIndex(data));
}