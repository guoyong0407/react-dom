import React,{Component} from 'react';
import React_DOM,{render} from 'react-dom'
import Tab from '../components/tab/index'
export default class App extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                {this.props.children}
                <Tab></Tab>
            </div>
        )
    }
}