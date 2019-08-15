import React from 'react';
import ImageContainer from '../containers/ImageContainer';

export default class MainComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        window.addEventListener('keydown',this.handleKeyDown)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown',this.handleKeyDown)
    }

    handleLeftArrowKey = () => {
        console.log('left')
    }

    handleRightArrowKey = () => {
        console.log('right')
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 37 ){
            this.handleLeftArrowKey();
        } else if(e.keyCode === 39) {
            this.handleRightArrowKey();
        }
    }

    render(){
        return(
            <div className='app-content'>
                <div className='images-container'>
                    <ImageContainer imageNumber={1}/>
                    <ImageContainer imageNumber={2}/>
                </div>
            </div>
        )
    }
}