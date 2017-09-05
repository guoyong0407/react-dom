import React,{Component} from 'react';
import React_DOM,{render} from 'react-dom'
import './index.css'
export default class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="header">
                {this.props.title}
            </div>
        )
    }
}
