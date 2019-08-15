import { connect } from 'react-redux';
import MainComponent from '../components/main';
import { setDataAction } from '../duck/operations';

const mapStateToProps = (state) => {
    return {
        data : state.reducer.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDataAction: (data) => {
            return dispatch(setDataAction(data));
        },
    };
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
export default MainContainer;