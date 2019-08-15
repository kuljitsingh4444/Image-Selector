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
        const { imageNumber, upadateImageIndex } = this.props;
        const imageIndex = getRandomImageIndex();
        upadateImageIndex({imageIndex,imageNumber})
        this.setState({
            imageSource : imageMapping[imageIndex]
        })
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