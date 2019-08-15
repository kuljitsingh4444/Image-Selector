import { connect } from 'react-redux';
import ImageComponent from '../components/ImageComponent';
import { upadateImageIndex } from '../duck/operations';

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        upadateImageIndex: (data) => {
            return dispatch(upadateImageIndex(data));
        },
    };
}

const ImageContainer = connect(mapStateToProps, mapDispatchToProps)(ImageComponent);
export default ImageContainer;