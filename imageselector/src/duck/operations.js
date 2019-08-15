import ActionCreator from './action';

export const setDataAction = (data) => dispatch => {
    dispatch(ActionCreator.setDataAction(data));
}