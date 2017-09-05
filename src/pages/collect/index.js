import React,{Component} from 'react';
import React_DOM,{render} from 'react-dom'
import {connect} from 'react-redux'
import * as action from '../../redux/actions'
import Header from '../../components/header'
import './index.css'
class Collect extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.setLink('/collect');
    }
    cancel=(id)=>{
        this.props.cancelCollect(id);
    };
    render(){
        return(
            <div>
                <Header title="收藏"></Header>
                <ul className="collect-list">
                    {
                        this.props.collect.list.map((item,index)=>(
                            <li key={index}>
                                <img src={item.bookCover} alt=""/>
                                    <div>
                                        <h3>{item.bookName}</h3>
                                        <p className="book-content">{item.content}</p>
                                        <a onClick={()=>this.cancel(item.id)}>取消收藏</a>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default connect((state)=>({
    collect:state.collect,
    link:state.link
}),action)(Collect)