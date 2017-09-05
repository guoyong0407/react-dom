import React,{Component} from 'react';
import React_DOM,{render} from 'react-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './index.css'
class Tab extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <nav>
                <Link to="/home" className={this.props.link=='/home'?'active':''}>
                    <i className="iconfont icon-shouye"></i>
                    <span>home</span>
                </Link>
                <Link to="/list" className={this.props.link=='/list'?'active':''}>
                    <i className="iconfont icon-list"></i>
                    <span>list</span>
                </Link>
                <Link to="/collect" className={this.props.link=='/collect'?'active':''}>
                    <i className="iconfont icon-shoucang"></i>
                    <span>collect</span>
                </Link>
                <Link to="/add" className={this.props.link=='/add'?'active':''}>
                    <i className="iconfont icon-14052229"></i>
                    <span>add</span>
                </Link>
            </nav>
        )
    }
}
export default connect(state=>({link:state.link}))(Tab)
