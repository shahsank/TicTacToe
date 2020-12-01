import React from 'react'
import GridItem from '../GridItem'
import './style.css'

export default class GridRow extends React.Component{
constructor(props){
    super(props);
}

    render(){
        
        return (
            <div className="grid-row">
              {this.props.row.map((boardCell, colIdx) => (
                  <GridItem 
                    key = {colIdx}
                    value = {boardCell}
                    rowIdx = {this.props.rowIdx}
                    colIdx = {colIdx}
                    playerClick = {this.props.playerClick}
                  />
              ))}            
            </div>
        )
    }
}