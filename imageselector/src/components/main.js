import React from 'react';
import { getRandomImageIndex } from '../utils';
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

    handleArrowKey = (imageNumber) => {
        const { imagesIndex } = this.props;
        let imageIndex = getRandomImageIndex();
        do {
            imageIndex = getRandomImageIndex();
        }
        while (imagesIndex[imageNumber] === imageIndex);
        this.updateImageData({ imageIndex , imageNumber })
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 37 ) {
            this.handleArrowKey(1);
        } else if(e.keyCode === 39) {
            this.handleArrowKey(2);
        }
    }

    updateImageData = ({ imageIndex, imageNumber }) => {
        const { upadateImageIndex } = this.props;
        upadateImageIndex({imageIndex,imageNumber})
    }

    render(){
        return(
            <div className='app-content'>
                <div className='images-container'>
                    <ImageContainer updateImageData={this.updateImageData} imageNumber={1}/>
                    <ImageContainer updateImageData={this.updateImageData} imageNumber={2}/>
                </div>
            </div>
        )
    }
}