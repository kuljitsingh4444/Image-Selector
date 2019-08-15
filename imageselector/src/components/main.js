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

    updateImage = (imageNumber) => {
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
            //left key
            this.updateImage(1);
        } else if(e.keyCode === 39) {
            //right key
            this.updateImage(2);
        } else if(e.keyCode === 32) {
            this.swapImages();
        }
    }

    swapImages = () => {
        const { swapImagesAction } = this.props;
        swapImagesAction();
    }

    updateImageData = ({ imageIndex, imageNumber }) => {
        const { upadateImageIndex } = this.props;
        upadateImageIndex({imageIndex,imageNumber})
    }

    updateImageOnClick = (imageNumber) => {
        this.updateImage(imageNumber);
    }

    render(){
        return(
            <div className='app-content'>
                <div className='images-container'>
                    <ImageContainer updateImageOnClick={this.updateImageOnClick} updateImageData={this.updateImageData} imageNumber={1}/>
                    <ImageContainer updateImageOnClick={this.updateImageOnClick} updateImageData={this.updateImageData} imageNumber={2}/>
                </div>
            </div>
        )
    }
}