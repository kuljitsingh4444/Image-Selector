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
        const imageIndex = getRandomImageIndex();
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