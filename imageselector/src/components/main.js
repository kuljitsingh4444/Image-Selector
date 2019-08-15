import React from 'react';
import ImageComponent from './ImageComponent';

export default class MainComponent extends React.Component{

    componentDidMount(){
        this.props.setDataAction(456)
    }

    render(){
        return(
            <div className='app-content'>
                <div className='images-container'>
                    <ImageComponent/>
                    <ImageComponent/>
                </div>
            </div>
        )
    }
}