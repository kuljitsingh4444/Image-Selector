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
        // this.setState({
        //     imageSource : imageMapping[imageIndex]
        // })
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

    render(){
        const { imageSource } = this.state;
        return(
            <div className='img-container'>
                <img className='image-content' src={imageSource}/>
            </div>
        )   
    }
}