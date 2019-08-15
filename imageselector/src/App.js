import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store.js';
import MainContainer from './containers/main';
import './App.css';

class App extends React.Component{
    render(){        
        return(
            <Provider store={store}>
                <MainContainer/>
            </Provider>
        );
    }
}

export default App;