import React from 'react'
import './style.css'

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.player=this.player.bind(this);
    }
    player(){
        if(this.props.Turn==='X') {
            return  "Player 1 turn's";            
        }
        else {
            return "Player 2 turn's"; 
        }
    }
    render(){
        return <div id="turn">
            {this.player()}
        </div>
    }
}