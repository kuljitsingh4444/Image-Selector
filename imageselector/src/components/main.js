import React from 'react';

export default class MainComponent extends React.Component{

    componentDidMount(){
        this.props.setDataAction(456)
    }

    render(){
        console.log(this.props.data)
        return(this.props.data)
    }
}