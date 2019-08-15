import { connect } from 'react-redux';
import ImageComponent from '../components/ImageComponent';

const mapStateToProps = (state) => {
    return {
        imagesIndex : state.reducer.imagesIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
}

const ImageContainer = connect(mapStateToProps, mapDispatchToProps)(ImageComponent);
export default ImageContainer;