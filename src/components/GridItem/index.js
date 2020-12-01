import React from 'react'
import './style.css'

export default class GridItem extends React.Component{
    constructor(props){
        super(props);
        this.clickfn = this.clickfn.bind(this);
    }
    clickfn(){
        this.props.playerClick(this.props.rowIdx, this.props.colIdx);
    }
    render(){
        return (<div className="grid-item" onClick={this.clickfn}>
            {this.props.value} 
        </div>)
    };
}