import React from 'react';
import { getRandomImageIndex } from '../utils';
import imageMapping from '../constant';

export default class ImageComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imageSource : ''
        }
    }

    componentDidMount(){
        this.setImage();
    }
    
    setImage = () => {
        const { imageNumber, updateImageData } = this.props;
        const imageIndex = getRandomImageIndex();
        updateImageData({imageIndex,imageNumber})
    }

    componentDidUpdate(prevProps){
        const { imageNumber, imagesIndex } = this.props;
        if( prevProps.imagesIndex[imageNumber] !== imagesIndex[imageNumber]){
            this.setState({
                imageSource : imageMapping[imagesIndex[imageNumber]]
            })
        }
    }

    stopEvents = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

    render(){
        const { imageSource } = this.state;
        const {  updateImageOnClick, imageNumber } = this.props;
        return(
            <div onDoubleClick={this.stopEvents} onClick={updateImageOnClick.bind(this,imageNumber)} className='img-container'>
                <img className='image-content' src={imageSource}/>
            </div>
        )   
    }
}