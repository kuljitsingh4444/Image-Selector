import React from 'react';
import { getRandomImageIndex } from '../utils';
import ImageContainer from '../containers/ImageContainer';

export default class MainComponent extends React.Component{

    constructor(props){
        super(props);
        this.clickCount = 0;
        this.timeOut = null;
    }

    componentDidMount(){
        window.addEventListener('keydown',this.handleKeyDown)
        window.addEventListener('click', this.handleWindowClick)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown',this.handleKeyDown);
        window.removeEventListener('click', this.handleWindowClick);
    }

    handleWindowClick = () => {
        this.clickCount++;
        if(this.clickCount === 1 ) {
            this.timeOut = setTimeout(()=>{
                this.clickCount = 0;
                //single click event
                //waits 300ms for user to do a double click.
                this.changeBothImages();
            },300)
        } else if ( this.clickCount === 2 ) {
            //double click event
            clearTimeout(this.timeOut)
            this.clickCount = 0;
            this.updateSameImages();
        }
    }

    updateSameImages = () => {
        const imageIndex = getRandomImageIndex();
        this.updateImageData({ imageIndex , imageNumber : 1 })
        this.updateImageData({ imageIndex , imageNumber : 2 })
    }

    changeBothImages = () => {
        this.updateImage(1);
        this.updateImage(2);
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
            //space key
            e.stopPropagation();
            e.preventDefault();
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

    updateImageOnClick = (imageNumber, event) => {
        event.stopPropagation();
        event.preventDefault();
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