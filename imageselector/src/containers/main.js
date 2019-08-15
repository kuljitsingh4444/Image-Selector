import { connect } from 'react-redux';
import MainComponent from '../components/main';
import { upadateImageIndex, swapImagesAction } from '../duck/operations';

const mapStateToProps = (state) => {
    return {
        imagesIndex : state.reducer.imagesIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        upadateImageIndex: (data) => {
            return dispatch(upadateImageIndex(data));
        },
        swapImagesAction: () => {
            return dispatch(swapImagesAction());
        },
    };
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
export default MainContainer;